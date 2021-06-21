import React from 'react'
import { Card } from '../components'
import heart from '../heart.svg'
import couch from '../icons/couch.svg'
import bed from '../icons/bed.svg'
import bath from '../icons/bath.svg'
import area from '../icons/area.svg'

export function CardContainer({ data, children }) {
    
    return (
        <Card>
            <Card.ImageCont>
                <Card.Image src={data.img} />
            </Card.ImageCont>
            
            <Card.Content>
                <Card.Price>{data.price} &euro;</Card.Price>
                <Card.Address>ул. {data.address}</Card.Address>
                <Card.Address>град: {data.city}</Card.Address>
                <Card.Rooms><span>{data.rooms[0]} {<img src={couch} />} </span><span>{data.rooms[1]} {<img src={bed} />} </span><span>{data.rooms[2]} {<img className="bath" src={bath} />}</span><span> {data.rooms[3]}m²</span></Card.Rooms>
                <Card.Favorite><img src={heart} /></Card.Favorite>
            </Card.Content>
        </Card>
    )
}