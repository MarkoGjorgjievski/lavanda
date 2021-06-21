import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Title>Имате прашања? Контактирајте не.</Footer.Title>
                <Footer.Break />
                <Footer.Row>
                <Footer.Column>
                        <Footer.Link href="#">Контакт</Footer.Link>
                        <Footer.Link href="#">Продавница</Footer.Link>
                        <Footer.Link href="#">Мапа на сајтот</Footer.Link>
                        <Footer.Link href="#">Популарни пребарувања</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Центар за поддршка</Footer.Link>
                        <Footer.Link href="#">Правила</Footer.Link>
                        <Footer.Link href="#">Услуги</Footer.Link>
                        <Footer.Link href="#">Медиа центар</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Профил</Footer.Link>
                        <Footer.Link href="#">Добиј картичка</Footer.Link>
                        <Footer.Link href="#">Приватност</Footer.Link>
                        <Footer.Link href="#">Колачиња</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Facebook</Footer.Link>
                        <Footer.Link href="#">Twitter</Footer.Link>
                        <Footer.Link href="#">Instagram</Footer.Link>
                        <Footer.Link href="#">LinkedIn</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Break />
                <Footer.Text>Copyright &copy; 2020 Lavanda Macedonia</Footer.Text>
            </Footer.Wrapper>
        </Footer>
    )
}