import React from 'react'
import {Nav} from 'react-bootstrap'


export const List = () => {
  return (
    <>
    <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Food List</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Favorites</Nav.Link>
  </Nav.Item>
  
</Nav>
    </>
  )
}
