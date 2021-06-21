import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Header } from '../components'
import heart from '../heart.svg'
import search from '../search.svg'

export function HeaderContainer({ children }) {

    return(
        <Router>
            <Header>
                {/* <Header.Logo src={'https://logos-download.com/wp-content/uploads/2018/05/Champion_logo_black.png'} /> */}
                <h1 style={{fontSize: "24px"}}>Lavanda</h1>
                {/* <Header.Form>
                    <Header.Input />
                    <Header.Submit>
                        <Header.Icon src={search} />
                    </Header.Submit>
                </Header.Form> */}
                <Header.Navbar>
                    <Header.FavButton>
                        <img src={heart} alt="heart" />
                        Oмилени
                    </Header.FavButton>
                    <Header.ButtonLink>Најави се</Header.ButtonLink>
                </Header.Navbar>
            </Header>
        </Router>
    )
}