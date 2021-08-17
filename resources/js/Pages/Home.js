import React from 'react';
import Layout from '@/Layouts/Layout';
import { Link } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/inertia-react';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function Home(props) {
    const personagens = props.personagens;
    const paginacao = props.paginacao;
    return (
        <Layout errors={props.errors}>
            <Head title="Início" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Row xs={1} md={4} className="g-4">
                                {personagens.map(({ id, name, image }) => (
                                    <Col key={id}>
                                        <Link href={route('personagem.detalhe', id)}>
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
                            {paginacao.anterior ? (
                                <Link href={route('page', paginacao.anterior)} as="button">Anterior</Link>
                              
                            ) : (
                                <Button variant="link" disabled>Anteriror</Button>
                            )}

                            {paginacao.proxima ? (
                                <Link href={route('page', paginacao.proxima)} as="button">Próxima</Link>
                            ) : (
                                <Button variant="link" disabled>Próxima</Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
