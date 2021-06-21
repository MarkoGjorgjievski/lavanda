import styled from 'styled-components/macro';

export const Container = styled.div`
    max-width: 288px;
    height: 320px;
    min-width: 210px;
    border: none;
    border-radius: 1rem;
    box-shadow: 0.5px 0.5px 5px rgba(34, 34, 34, 0.2);
    margin: 0.5rem;
    @media (max-width: 700px) {
        height: 300px;
    }
`;

export const ImageCont = styled.div`
    height: 50%;
    overflow: hidden;
    @media (max-width: 700px) {
       height: 45%;
    }
    padding: -66%;
    
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    align-content: center;
    display: flex;
    align-content: center;
`;

export const Image = styled.img`
    align-self: center;
    width: 100%;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
`;

export const Content = styled.div`
    padding: 1rem;
    position: relative;
    height: 50%;
`;

export const Price = styled.h1`
    padding-bottom: 0.5rem;
    font-size: 1.2rem;
`;

export const Address = styled.p`
    
`;

export const Rooms = styled.p`
    position: absolute;
    bottom: 0.5rem;
    margin-top: 1rem;
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-content: baseline;
    span {
        display: flex;
        align-content: baseline;
    }
    @media (max-width: 700px) {
        bottom: 0;
     }
    img {
        width: 20px;
        margin-left: 5px;
    }
    .bath {
        margin-bottom: 5px;
    }
`;

export const Favorite = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 99px;
    background-color: white;
    cursor: pointer;
    box-shadow: 0.5px 0.5px 5px rgba(34, 34, 34, 0.2);
    
    img {
        margin: 0.5rem;
    }
`;
