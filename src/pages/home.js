import React from 'react';
import { HeaderContainer } from '../containers/header';
import { SearchBarContainer } from '../containers/search-bar';
import { HomeCardWrapperContainer } from '../containers/home-card-wrapper'
import { Landing } from '../components'
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      
      <Landing src={"edge"}>
      <HeaderContainer />
        <Landing.Headline>Најди дом за себе и за твоите најблиски.</Landing.Headline>
        <SearchBarContainer />
      </Landing>
      <HomeCardWrapperContainer />
      <FooterContainer />
    </>
    )
}