import { css } from 'styled-components';
import { breakpoints } from './media';

export const utilityClasses = css`
  //--------- Spacing ---------//
  .flow-spacing-1 > * + * {
    margin-top: var(--spacing-1);
  }

  .flow-spacing-2 > * + * {
    margin-top: var(--spacing-2);
  }

  .flow-spacing-3 > * + * {
    margin-top: var(--spacing-3);
  }

  .spacing-top {
    margin-top: var(--spacing-2);
  }

  .media-rm-margin > * + * {
    @media (min-width: ${breakpoints.mobileMenu}) {
      margin: 0;
    }
  }

  //--------- Typography ---------//
  .link-mobile {
    font-size: var(--fs-mobile-links);
    color: var(--clr-white);
    transition: var(--link-transition);

    &:hover {
      cursor: pointer;
    }
  }

  .link-desktop {
    font-size: var(--fs-text-big);
    color: var(--clr-white);
    transition: var(--link-transition);
  }

  .active-link {
    color: var(--clr-primary-500);
  }

  //--------- Layout ---------//
  .wrapper {
    width: min(90%, 80rem); /* MAX WIDTH => 1280px */
    margin-inline: auto;
  }

  //--------- Various ---------//
  .remove-scroll {
    overflow-y: hidden;
    padding-right: ${props => props.scrollbarWidth}px;
  }

  .remove-default-button {
    border: 0;
    background-color: transparent;
  }

  .default-icon {
    color: var(--clr-white);
    width: 1.8rem;
    height: 1.5rem;
  }

  .relative-parent {
    position: relative;
  }

  .focus-box {
    &:focus,
    &:active {
      border-color: var(--clr-primary-500);
      outline: 0.5px solid var(--clr-primary-500);
      border-radius: var(--border-radius);
    }
  }

  .focus-bg {
    &:focus,
    &:active {
      background-color: var(--clr-white-opacity);
      outline: 2px solid transparent;
    }
  }
`;
