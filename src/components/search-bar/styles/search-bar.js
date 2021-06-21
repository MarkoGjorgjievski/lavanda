import styled from 'styled-components/macro';

export const Container = styled.div`
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    margin: 1rem auto;
    padding: 1rem;
    align-content: center;

    @media (max-width: 900px) {
        max-width: 800px;
        width: auto;
    }
`;

export const Options = styled.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 1rem;
    justify-content: center;
`;

export const Tab = styled.p`
    font-size: 1.2rem;
    margin: 0 1rem;
    user-select: none;
    cursor: pointer;
    border-radius: 99px;
    padding: 0.5rem 1rem;
    box-shadow: 0.5px 0.5px 5px rgba(34, 34, 34, 0.2);
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    background-color: ${({ active }) => (active === 'true' ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.7)')};
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1rem; // 16 px
    margin: 0.5rem; // 8px
    border-radius: 99px;
    box-shadow: 0.5px 0.5px 5px rgba(34, 34, 34, 0.2);
`;

export const Input = styled.input`
    flex: 1;
    outline: none;
    font-size: 1.2rem;
    color: gray;
    border: none;
    padding-left: 0.5rem;
    background-color: transparent;
`;

export const Icon = styled.img`
    width: 20px;
    margin: 0.5rem;
    cursor: pointer;
`;

export const CloseIcon = styled(Icon)`
`;

export const Submit = styled.button`
    cursor: pointer;
    border: 0px solid #333;
    border-radius: 99px;
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    background-color: #2d3436;
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);


    color: white;
    outline: none;
`;


