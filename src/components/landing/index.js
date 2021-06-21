import React from 'react'
import { Background, Headline } from './styles/landing'

export default function Landing({ bg = true, children, ...restProps }) {
    return bg ? (
      <Background data-testid="header-bg" {...restProps}>
        {children}
      </Background>
    ) : (
      children
    );
}

Landing.Headline = function LandingHeadline({ children, ...restProps }) {
  return <Headline {...restProps}>{children}</Headline>
}