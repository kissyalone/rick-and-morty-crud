import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Layout from '@/Layouts/Layout';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';

export default function PersonagemDetalhe(props) {
    const personagem = props.personagem;
    const { data, post } = useForm({
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
                                                <Col xs={12} md={12} className="mt-3">
                                                    <Col className="bg-gray-300 p-1"> 
                                                        <Label forInput="name" value="Nome" />
                                                        <Input name="name" className="w-full" value={data.name} readOnly />
                                                    </Col>
                                                </Col>
                                                <Col xs={12} md={6} className="mt-4"> 
                                                    <Col className="bg-gray-300 p-1"> 
                                                            <Label forInput="species" value="Espécie" />
                                                            <Input name="species" className="w-full" value={data.species} readOnly />
                                                        </Col>
                                                    </Col>
                                                <Col xs={12} md={6} className="mt-4"> 
                                                    <Col className="bg-gray-300 p-1"> 
                                                        <Label forInput="gender" value="Gênero" />
                                                        <Input name="gender" className="w-full" value={data.gender} readOnly />
                                                    </Col>
                                                </Col>
                                            
                                                <Col xs={12} md={12} className="mt-3 mb-5"> 
                                                    <Col className="bg-gray-300 p-1"> 
                                                        <Label forInput="location" value="Localização" />
                                                        <Input name="location" className="w-full" value={data.location} readOnly />
                                                    </Col>
                                                </Col>
                                                <Col xs={12} md={{ span: 3, offset: 9 }} className="mt-5 ml-5">
                                                    <Button type="submit" className="bg-blue-900">Salvar Personagem</Button>
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