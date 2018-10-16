import React from 'react'
import Travel from './Travel'
import { Col, Row } from 'reactstrap'

const travels = [
  {
    country: "Islande",
    destination: "Islande",
    photo: 'https://www.kuoni.fr/wp-content/uploads/2017/12/IS-Circuit-Islande-%C2%A9-Nikolay-Pandev-iStock-56258174-500x500.jpg',
    distance: "2038 km"
  },
  {
    country: "Guadeloupe",
    destination: "Guadeloupe",
    photo: "https://i0.wp.com/www.carnetdeshopping.com/wp-content/uploads/2011/07/plages-de-guadeloupe_500.jpg?fit=500%2C500&ssl=1",
    distance: "6831 km"
  },
  {
    country: "Belgique",
    destination: "Belgique",
    photo: "https://media03.cdn.agenda.be/c70791fd00b129d12543d46bc998593ffd585b0c.jpg?wl=500",
    distance: "110 km"
  },
  {
    country: "Mexique",
    destination: "Mexique",
    photo: "https://dst-voyages.com/wp-content/uploads/2017/12/maya.jpg",
    distance: "9020 km"
  },
  {
    country: "Grèce",
    destination: "Grèce",
    photo: "https://www.kuoni.fr/wp-content/uploads/2017/12/croisiere_grece_iStock-pooh-500x500.jpg",
    distance: "2714 km"
  }
]

const Travels = () => (
  <Row className='justify-content-center'>
    {travels.map(travel =>(
      <Col lg='4'>
        <Travel {...travel} />
      </Col>
    ))}
  </Row>
)

export default Travels
