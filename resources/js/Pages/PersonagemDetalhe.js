import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head, InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/inertia-react';
import { Row, Col, Container, Button,Image, Form,InputGroup } from 'react-bootstrap';

export default function PersonagemDetalhe(props) {
    const personagem = props.personagem;
    const { data, setData, errors, post, processing } = useForm({
        name: personagem.name || '',
        image: personagem.image || '',
        species: personagem.species || '',
        url: personagem.url || '',
        location: personagem.location.name || '',
        gender: personagem.gender || '',
        origin: personagem.origin.name || '',
        status: personagem.status || '',
    });
    const active = false;
    function handleSubmit(e) {
        e.preventDefault();
        post(route('personagem.store'));
    }
    
    return (
        <Layout errors={props.errors}>
            <Head title={personagem.name} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <Container>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            <Image src={personagem.image} roundedCircle />
                                        </Col>
                                        <Col xs={12} md={8}>
                                            <Row>
                                                <Form.Group as={Row} className="mb-3"   >
                                                    <Form.Label column sm={1}> Nome: </Form.Label>
                                                    { 
                                                        active ?
                                                            (<Col sm={11}> <Form.Control type="text" defaultValue={data.name} onChange={e => setData('name', e.target.value)}/> </Col>)
                                                        :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly defaultValue={data.name} onChange={e => setData('name', e.target.value)}/> </Col>)
                                                    }
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" >
                                                        <Col xs={12} md={6}> 
                                                            <Form.Label column sm={1}> Especie </Form.Label>
                                                            { 
                                                                active ?
                                                                    (<Col sm={11}> <Form.Control type="text" defaultValue={data.species} onChange={e => setData('species', e.target.value)}/> </Col>)
                                                                :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly defaultValue={data.species} onChange={e => setData('species', e.target.value)}/> </Col>)
                                                            }
                                                            
                                                        </Col>
                                                        <Col xs={12} md={6}>
                                                            <Form.Label column sm={1}> Localização </Form.Label>
                                                            { 
                                                                active ?
                                                                    (<Col sm={11}> <Form.Control type="text" defaultValue={data.location} onChange={e => setData('location', e.target.value)}/> </Col>)
                                                                :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly defaultValue={data.location} onChange={e => setData('location', e.target.value)}/> </Col>)
                                                            }
                                                        </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" >
                                                        <Col xs={12} md={4}>
                                                            <Form.Label column sm={1}> Origem </Form.Label>
                                                            { 
                                                                active ?
                                                                    (<Col sm={11}> <Form.Control type="text" defaultValue={data.origin} onChange={e => setData('origin', e.target.value)}/> </Col>)
                                                                :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly defaultValue={data.origin} onChange={e => setData('origin', e.target.value)}/> </Col>)
                                                            }
                                                        </Col>
                                                        <Col xs={12} md={4}>
                                                            <Form.Label column sm={1}> Genero </Form.Label>
                                                            { 
                                                                active ?
                                                                    (<Col sm={11}> <Form.Control type="text" defaultValue={data.gender} onChange={e => setData('gender', e.target.value)}/> </Col>)
                                                                :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly defaultValue={data.gender} onChange={e => setData('gender', e.target.value)}/> </Col>)
                                                            }
                                                        </Col>
                                                        <Col xs={12} md={4}>
                                                            <Form.Label column sm={1}> Status </Form.Label>
                                                            { 
                                                                active ?
                                                                    (<Col sm={11}> <Form.Control type="text" defaultValue={data.status} onChange={e => setData('status', e.target.value)}/> </Col>)
                                                                :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly defaultValue={data.status} onChange={e => setData('status', e.target.value)}/> </Col>)
                                                            }
                                                        </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" >
                                                    <Col xs={12} md={12}>
                                                        {active ? (
                                                            <Col xs={12} md={4}>
                                                                <Button>Editar</Button>
                                                                {' '}
                                                                <Button>Excluir</Button>
                                                            </Col>
                                                        ) : (
                                                            <Col xs={12} md={4}>
                                                                <Button type="submit">Salvar</Button>
                                                            </Col>
                                                        ) }
                                                    </Col>
                                                </Form.Group>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
