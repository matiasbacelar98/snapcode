import { useState } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { v4 as uuid } from 'uuid';
import { useAuthContext } from '../../context/authContext';
import { supabase } from '../../supabase/supabase';
import { useCopyToClipboard } from '../../hooks';

export const useActionBtn = (editorRef, code) => {
  const [copyTooltip, setCopyTooltip] = useState({ isVisible: false, content: 'Copiado !' });
  const [saveTooltip, setSaveTooltip] = useState({ isVisible: false, content: '' });
  const [downloadTooltip, setDownloadTooltip] = useState({ isVisible: false, content: '' });
  const { user } = useAuthContext();
  const [copyToClipboard] = useCopyToClipboard();

  // display tooltip mesage
  function displayMessage(state, setState, time, newContent = null) {
    if (newContent) {
      setState({ isVisible: true, content: newContent });
    } else {
      // not update content
      setState({ ...state, isVisible: true });
    }

    // Hide tooltip
    setTimeout(() => {
      setState({ ...state, isVisible: false });
    }, time);
  }

  // store img in supabase
  async function sendImgToSupabase() {
    // take picture of code and bg of editor
    const editorPictureAsBlob = await domtoimage.toBlob(editorRef.current);

    // send image to supabase
    const { data, error } = await supabase.storage
      .from('snippets')
      .upload(`${user.user.id}/${uuid()}`, editorPictureAsBlob);

    // display messages conditionaly
    if (data) {
      displayMessage(saveTooltip, setSaveTooltip, 1500, 'Imagen guardada');
    }

    if (error) {
      displayMessage(saveTooltip, setSaveTooltip, 1500, 'Ha ocurrido un error');
    }
  }

  /* ---------- ACTIONS ---------- */
  const handleCopyToClipboard = () => {
    copyToClipboard(code);

    // display tooltip
    displayMessage(copyTooltip, setCopyTooltip, 650);
  };

  const saveUserImg = async () => {
    if (editorRef.current === null) return;

    // if user is null display message
    if (!user) {
      displayMessage(saveTooltip, setSaveTooltip, 1500, 'Por favor inicie sesion');
      return;
    }

    sendImgToSupabase();
  };

  const downloadCodeAsImg = async () => {
    try {
      if (editorRef.current === null) return;

      // take picture of code and bg of editor
      const editorPictureAsBlob = await domtoimage.toBlob(editorRef.current);

      // download image
      saveAs(editorPictureAsBlob, 'snapcode.png');
    } catch (error) {
      displayMessage(downloadTooltip, setDownloadTooltip, 1500, 'Ha ocurrido un error');
    }
  };

  return {
    handleCopyToClipboard,
    saveUserImg,
    downloadCodeAsImg,
    copyTooltip,
    saveTooltip,
    downloadTooltip,
  };
};
