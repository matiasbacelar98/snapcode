import { Routes, Route } from 'react-router-dom';
import useScrollbarSize from 'react-scrollbar-size';
import GlobalStyles from './styles/globalStyles';
import Home from './routes/home/Home';
import MyImages from './routes/myImages/MyImages';

function App() {
  // Get scrollbarWidth of current browser
  const { width } = useScrollbarSize();

  return (
    <>
      <GlobalStyles scrollbarWidth={width} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='mis-imagenes' element={<MyImages />} />
      </Routes>
    </>
  );
}

export default App;
