import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/inertia-react';
import { Row, Col, Container,Image } from 'react-bootstrap';
import VazioImg from '../../../public/img/vazio.png';

export default function Vazio(props) {
    return (
        <Layout errors={props.errors}>
            <Head title="404"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Container>
                                <Row>
                                    <div class="flex items-center ...">
                                        <div><p className="text-center text-5xl">404/500 Nada encontrado </p></div>
                                        <div><Image src={VazioImg} /></div>
                                    </div> 
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
