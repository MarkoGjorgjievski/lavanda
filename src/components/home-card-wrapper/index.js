import React from 'react'
import { Wrapper, Title, Outter, Inner, InnerGrid, Quick } from './styles/home-card-wrapper'



export default function HomeCardWrapper({ children, ...restProps }) {
    return (
      <Wrapper {...restProps}>
        {children}
      </Wrapper>
    )
}

HomeCardWrapper.Title = function HomeCardWrapperTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

HomeCardWrapper.Outter = function HomeCardWrapperOutter({ children, ...restProps }) {
    return <Outter {...restProps}>{children}</Outter>
}

HomeCardWrapper.Inner = function HomeCardWrapperInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

HomeCardWrapper.InnerGrid = function HomeCardWrapperInnerGrid({ children, ...restProps }) {
    return <InnerGrid {...restProps}>{children}</InnerGrid>
}

HomeCardWrapper.Quick = function HomeCardWrapperQuick({ children, ...restProps }) {
    return <Quick {...restProps}>{children}</Quick>
}