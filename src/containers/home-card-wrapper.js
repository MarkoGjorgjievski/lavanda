import React from 'react'
import { HomeCardWrapper } from '../components'
import { CardContainer } from './card'

export function HomeCardWrapperContainer({ children }) {
    const quickSearch = ['Куманово', 'Битола', 'Охрид', 'Прилеп', 'Струмица', 'Скопје', 'Маврово', 'Штип', 'Велес', 'Струга', 'Дојран'];
    const data = 
        [
            {
                price: "60.000",
                address: "Партизански Одреди 123",
                city: "Скопје",
                rooms: [1, 2, 1, 60],
                img: 'livingroom1'
            },
            {
                price: "48.500",
                address: "Гоце Делчев 20/32",
                city: "Битола",
                rooms: [1, 1, 1, 48],
                img: 'livingroom2'
            },
            {
                price: "100.000",
                address: "Иво Лола Рибар 50",
                city: "Куманово",
                rooms: [2, 3, 2, 95],
                img: 'livingroom3'
            },
            {
                price: "45.000",
                address: "Октомвриска Револуција 54",
                city: "Охрид",
                rooms: [1, 2, 1, 50],
                img: 'livingroom4'
            },
        ]
    
    return (
        <>
        <HomeCardWrapper>
            <HomeCardWrapper.Outter>
                <HomeCardWrapper.Title>Најди го најдобриот дом<br />во Македонија.</HomeCardWrapper.Title>
                <HomeCardWrapper.Inner>
                    {data.map(item => 
                        <CardContainer data={item} />)
                    }
                </HomeCardWrapper.Inner>
            </HomeCardWrapper.Outter>
        </HomeCardWrapper>
        <HomeCardWrapper>
            <HomeCardWrapper.Outter>
                <HomeCardWrapper.Title>Брзо<br />пребарување.</HomeCardWrapper.Title>
                <HomeCardWrapper.InnerGrid>
                    {quickSearch.map((city) => 
                    <HomeCardWrapper.Quick src={`${city}`}><div><h6>{city}</h6></div></HomeCardWrapper.Quick>
                    )}
                </HomeCardWrapper.InnerGrid>
            </HomeCardWrapper.Outter>
    </HomeCardWrapper>
    </>
    )
}