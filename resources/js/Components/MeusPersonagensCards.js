import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import {Link } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';

export default function MeusPersonagensCards({personagens, routeName, paginacao }) {
    return (
        <div> 
            <Row xs={1} md={4} className="g-4">
                {personagens.map(({ id, name, image }) => (
                    <Col key={id}>
                       <Link href={route(routeName, id)} style={{ textDecoration: 'none' }}>
                            <Card className="pt-2 px-2 text-black text-center">      
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
            <Row xs={12} md={12} className="g-4">
                <Pagination links={paginacao} />
            </Row>
        </div>
    );
}
