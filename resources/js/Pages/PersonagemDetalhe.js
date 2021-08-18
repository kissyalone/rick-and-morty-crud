import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Row, Col, Container, Button,Image, Form,InputGroup } from 'react-bootstrap';
import Layout from '@/Layouts/Layout';

export default function PersonagemDetalhe(props) {
    const personagem = props.personagem;
    const { data, setData, post, processing, errors, reset } = useForm({
        id: personagem.id || '',
        name: personagem.name || '',
        image: personagem.image || '',
        species: personagem.species || '',
        url: personagem.url || '',
        location: personagem.location.name || '',
        gender: personagem.gender || '',
    });

    const submit = (e) => {
        e.preventDefault(); 
        post(route('personagem.store'));
    };

    return (
        <Layout errors={props.errors}>
            <Head title={personagem.name} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <Container>
                                    <Row>
                                        <Col xs={12} md={4}>
                                             <Image src={data.image} roundedCircle />
                                        </Col>
                                        <Col xs={12} md={8}>
                                            <Row>     
                                                <Col xs={12} md={12} className=""> 
                                                    <Col className=" bg-gray-300 p-1"> <div className="text-5xl">{data.name}</div> </Col>
                                                </Col>
                                                <Col xs={12} md={6} className="mt-4"> 
                                                    <Col className=" bg-gray-300 p-1"> <div className="text-3xl">Espécie: {data.species}</div> </Col>
                                                </Col>
                                                <Col xs={12} md={6} className="mt-4"> 
                                                    <Col className=" bg-gray-300 p-1"> <div className="text-3xl">Gênero: {data.gender}</div> </Col>
                                                </Col>
                                            
                                                <Col xs={12} md={12} className="mt-3 mb-5"> 
                                                    <Col className=" bg-gray-300 p-1"> <div className="text-3xl">Localização: {data.location}</div> </Col>
                                                </Col>
                                                <Col xs={12} md={{ span: 3, offset: 9 }} className="mt-5 ml-5">
                                                    <Button type="submit" variant="flat" className="">Salvar Personagem</Button>
                                                </Col>
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