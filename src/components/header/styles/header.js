import styled from 'styled-components/macro';
import { Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.7rem 3rem;
    width: 100%;
    justify-content: space-between;
    // border-bottom: 0.3px solid #ccc;
    user-select: none;
`;

export const Logo = styled.img`
    display: flex;
    height: 40px;
`;

export const Navbar = styled.div`
    display: flex;
`

export const ButtonLink = styled(ReactRouterLink)`
    display: flex;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    // border: 0.1px solid #fff;
    // border-radius: 99px;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    color: #333;
    font-weight: 500;
    font-size: 1.1rem
`;

export const FavButton = styled(ButtonLink)`
    align-items: center;
    img {
        width: 20px;
        margin-right: 8px;
    }
`;

export const Form = styled.form`
    display: flex;
    border: none;
    border-radius: 99px;
    background-color: white;
`;

export const Input = styled.input`
    border: none;
    border-radius: 99px;
    margin-right: 0.5rem;
    padding: 0.5rem;
    padding-left: 1rem;
    width: 200px;
    outline: none;
`;

export const Submit = styled.button`
    border: none;
    border-radius: 99px;
    background-color: white;
    alight-content: center;
    padding: 0.5rem;
    width: 2.5rem;
    outline: none;
`;

export const Icon = styled.img`
    width: 1rem;
    display: flex;
    margin: auto;
    
`;
