/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { setState } from 'react'
import './Component1.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function Component({ zaban, image }) {
    return (
        <Card id='hazhar2' style={{ width: '15rem' }} sm={12} md={6} lg={4}>
            <Card.Img id='image' src={image} />
            <Card.Body>
                <Card.Title>{zaban}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem> <a href='#'>Start learning</a> </ListGroupItem>
                <ListGroupItem> <a href='#'>About this language ...</a> </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Buy courses</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}