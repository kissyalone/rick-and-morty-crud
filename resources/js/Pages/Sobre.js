import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/inertia-react';
import { Row, Col, Container,Image } from 'react-bootstrap';

export default function Sobre(props) {
    return (
        <Layout errors={props.errors}>
            <Head title="Sobre Autor"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Container>
                                |<Row>
                                    <Col xs={12} md={4}>
                                            <Image src="" roundedCircle />
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <Row>     
                                            <Col xs={12} md={12} className="mt-3">
                                                <Col className="bg-gray-300 p-1"> 
                                                    <Label forInput="name" value="Nome" />
                                                    <Input name="name" className="w-full" value="Jhonata de Souza Pires" readOnly />
                                                </Col>
                                            </Col>
                                            <Col xs={12} md={6} className="mt-4"> 
                                                <Col className="bg-gray-300 p-1"> 
                                                    <Label forInput="species" value="Espécie" />
                                                    <Input name="species" className="w-full" value="Humano" readOnly />
                                                </Col>
                                            </Col>
                                            <Col xs={12} md={6} className="mt-4"> 
                                                <Col className="bg-gray-300 p-1"> 
                                                    <Label forInput="gender" value="Gênero" />
                                                    <Input name="gender" className="w-full" value="Masculino" readOnly />
                                                </Col>
                                            </Col>

                                            <Col xs={12} md={12} className="mt-3 mb-5"> 
                                                <Col className="bg-gray-300 p-1"> 
                                                    <Label forInput="location" value="Localização" />
                                                    <Input name="location" className="w-full" value="Sorocaba - SP - Brasil" readOnly />
                                                </Col>
                                            </Col>
                                            <Col xs={12} md={6} className="mt-4"> 
                                                <Col className="bg-gray-300 p-1"> 
                                                    <Label forInput="profissao" value="Profissão" />
                                                    <Input name="profissao" className="w-full" value="Desenvolvedor Web" readOnly />
                                                </Col>
                                            </Col>
                                            <Col xs={12} md={6} className="mt-4"> 
                                                <Col className="bg-gray-300 p-1"> 
                                                    <Label forInput="ferramentas" value="Ferramentas" />
                                                    <Input name="ferramentas" className="w-full" value="PHP, Laravel, Vue.js, SQL, React" readOnly />
                                                </Col>
                                            </Col>
                                            <Col xs={12} md={{ span: 3, offset: 9 }} className="mt-5 ml-5">
                                                <Button type="submit" className="bg-blue-900">Linkedin</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
