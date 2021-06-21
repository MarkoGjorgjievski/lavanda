import React from 'react'
import { Container, Options, Tab, Form, Icon, Input, CloseIcon, Submit } from './styles/search-bar'

export default function SearchBar({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

SearchBar.Options = function SearchBarOptions({ children, ...restProps }) {
    return <Options {...restProps}>{children}</Options>
}

SearchBar.Tab = function SearchBarTab({ children, ...restProps }) {
    return <Tab {...restProps}>{children}</Tab>
}

SearchBar.Form = function SearchBarForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}

SearchBar.Icon = function SearchBarIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}

SearchBar.Input = function SearchBarInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

SearchBar.CloseIcon = function SearchBarCloseIcon({ children, ...restProps }) {
    return <CloseIcon {...restProps}>{children}</CloseIcon>
}

SearchBar.Submit = function SearchBarSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}