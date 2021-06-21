import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding: 1rem 3rem;
  @media (max-width: 600px) {
      padding: 1rem;
  }
`;

export const Outter = styled.div`
    margin: 0 auto;
`;

export const Inner = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const InnerGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    padding: 0.5rem;
    margin: 1rem 0;
`;

export const Quick = styled.div`
    min-width: 158px;
    min-height: 100px;
    border: none;
    border-radius: 1rem;
    box-shadow: 0.5px 0.5px 5px rgba(34, 34, 34, 0.2);
    margin: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    background: url(${({ src }) => (src ? `../../images/cities/${src}.jpg` : '../images/misc/home-bg.jpg')}) center / cover
    no-repeat;
    color: white;
    font-size: 1.2rem;
    position: relative;
    div {
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: rgba(2,0,36, 0.5);
        background: linear-gradient(0deg, rgba(2,0,36,0.9) 0%, rgba(51,51,51,0.2) 37%, rgba(255,255,255,0.1) 100%);   
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 1rem;
        display: flex;
        align-items: flex-end;
        &:hover {
            background-color: rgba(0, 0, 0, 0);
        }
        h6 {
            display: flex;
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            align-self: baseline;
            margin: 0 auto;
            color: white;
            font-size: 1.3rem;
        }
    }
    
    

    &:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
    &:nth-child(2) { grid-area: 2 / 1 / 3 / 2; }
    &:nth-child(3) { grid-area: 1 / 2 / 3 / 3; }
    &:nth-child(4) { grid-area: 1 / 3 / 2 / 4; }
    &:nth-child(5) { grid-area: 2 / 3 / 3 / 4; }
    &:nth-child(6) { grid-area: 1 / 4 / 3 / 5; }
    &:nth-child(7) { grid-area: 1 / 5 / 2 / 6; }
    &:nth-child(8) { grid-area: 2 / 5 / 3 / 6; }
    &:nth-child(9) { grid-area: 1 / 6 / 3 / 7; }
    &:nth-child(10) { grid-area: 1 / 7 / 2 / 8; }
    &:nth-child(11) { grid-area: 2 / 7 / 3 / 8; }   
`;