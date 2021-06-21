import styled from 'styled-components/macro';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  background: url(${({ src }) => (src ? `../../images/${src}.jpg` : '../images/misc/home-bg.jpg')}) bottom / cover
  no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Headline = styled.h1`
  font-size: 2rem;
  margin: 6rem auto;
  color: white;
  text-shadow: 0.5px 0.5px 5px rgba(34, 34, 34, 0.2);

  @media (max-width: 800px) {
    font-size: 1.8rem;
    margin: 3rem auto;
    padding: 2rem;
  }
`;