import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import PaginacaoSimples from '@/Components/PaginacaoSimples';
import {Link } from '@inertiajs/inertia-react';

export default function PersonagensCards({ personagens, routeName, paginacao }) {
    return (
        <div> 
            <Row xs={1} md={4} className="g-4">
                {personagens.map(({ id, name, image }) => (
                    <Col key={id}>
                        <Link href={route(routeName, id)}>
                            <Card>      
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
                <PaginacaoSimples paginacao={paginacao}/>
            </Row>
        </div>
    );
}
