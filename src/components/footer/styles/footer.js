import styled from 'styled-components/macro';

export const Container = styled.div`
    padding: 4rem 4rem 2rem 4rem;
    margin: 0 auto;
    margin-top: 4rem;
    background-color: rgb(247, 247, 247);

    @media (max-width: 800px) {
        padding: 2rem 1rem;
    }
`;

export const Wrapper = styled.div`
    width: 88%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    &:last-of-type {
        text-align: right;
        @media(max-width: 600px) {
            text-align: left;
        }
    }
    

`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    grid-gap: 15px;

    @media(max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0
`;