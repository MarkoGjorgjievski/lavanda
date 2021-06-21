import React from 'react'
import { Container, Content, ImageCont, Image, Price, Address, Rooms, Favorite } from './styles/card'

export default function Card({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Card.ImageCont = function HeaderImageCont({ children, ...restProps }) {
    return <ImageCont>{children}</ImageCont>;
};

Card.Image = function HeaderImage({ src, ...restProps }) {
    return <Image {...restProps} src={`../images/rooms/${src}.jpg`} />;
};

Card.Content = function HeaderContent({ children, ...restProps }) {
    return <Content>{children}</Content>;
};

Card.Price = function HeaderPrice({ children, ...restProps }) {
    return <Price>{children}</Price>;
};

Card.Address = function HeaderAddress({ children, ...restProps }) {
    return <Address>{children}</Address>;
};

Card.Rooms = function HeaderRooms({ children, ...restProps }) {
    return <Rooms>{children}</Rooms>;
};

Card.Favorite = function HeaderFavorite({ children, ...restProps }) {
    return <Favorite>{children}</Favorite>;
};