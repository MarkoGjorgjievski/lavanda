import React from 'react'
import { Container, Logo, Navbar, ButtonLink, FavButton, Form, Input, Icon, Submit } from './styles/header'
import { Link as ReactRouterLink } from 'react-router-dom'

export default function Header({ children, ...restProps }) {
    return (
      <Container {...restProps}>
        {children}
      </Container>
    )
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
};

Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
    return <Navbar>{children}</Navbar>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.FavButton = function HeaderFavButton({ src, children, ...restProps }) {
return <FavButton {...restProps}>{src}{children}</FavButton>;
};

Header.Form = function HeaderForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}

Header.Icon = function HeaderIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}

Header.Input = function HeaderInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

Header.Submit = function HeaderSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}