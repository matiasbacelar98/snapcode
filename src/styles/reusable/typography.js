import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: ${props => (props.error ? 'var(--fs-404)' : 'var(--fs-1)')};
  font-weight: 700;
  letter-spacing: 0.375rem; // 6px
  user-select: none;
  color: var(--clr-bg);
  // "Stroke" effect
  text-shadow: var(--clr-primary-500) 2px 0px 0px, var(--clr-primary-500) 1.75517px 0.958851px 0px,
    var(--clr-primary-500) 1.0806px 1.68294px 0px, var(--clr-primary-500) 0.141474px 1.99499px 0px,
    var(--clr-primary-500) -0.832294px 1.81859px 0px,
    var(--clr-primary-500) -1.60229px 1.19694px 0px, var(--clr-primary-500) -1.97999px 0.28224px 0px,
    var(--clr-primary-500) -1.87291px -0.701566px 0px,
    var(--clr-primary-500) -1.30729px -1.51361px 0px,
    var(--clr-primary-500) -0.421592px -1.95506px 0px,
    var(--clr-primary-500) 0.567324px -1.91785px 0px,
    var(--clr-primary-500) 1.41734px -1.41108px 0px,
    var(--clr-primary-500) 1.92034px -0.558831px 0px;
`;

const StyledMessage = styled.h1`
  font-size: var(--fs-2);
  font-weight: 600;
  max-width: 50rem; // 800px
  text-align: center;

  &::after {
    content: '';
    display: block;
    max-width: 9.375rem; // 150px
    padding: 0.1rem 0;
    background-color: var(--clr-primary-500);
    margin-top: 1rem;
    margin-inline: auto;
  }
`;

const StyledParragraphSmall = styled.p`
  font-size: var(--fs-text);
`;

const StyledHighlight = styled.span`
  color: var(--clr-primary-500);
  text-transform: uppercase;
`;

export { StyledH1, StyledMessage, StyledParragraphSmall, StyledHighlight };
