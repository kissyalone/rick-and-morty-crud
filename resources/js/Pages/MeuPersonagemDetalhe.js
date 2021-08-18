import React from 'react';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm, usePage } from '@inertiajs/inertia-react';
import { Row, Col, Container, Button,Image } from 'react-bootstrap';
import Layout from '@/Layouts/Layout';
import Input from '@/Components/Input';
import Label from '@/Components/Label';

export default function MeuPersonagemDetalhe(props) {
    const personagem = props.personagem;
    const { data, setData, put, processing, errors, reset } = useForm({
        id: personagem.id || '',
        name: personagem.name || '',
        image: personagem.image || '',
        species: personagem.species || '',
        url: personagem.url || '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    function destroy() {
        if (confirm('Are you sure you want to delete this contact?')) {
            Inertia.delete(route('meu.personagem.delete', data.id));
        }
    }

    const submit = (e) => {
        e.preventDefault(); 
        put(route('meu.personagem.update', data.id));
    };

    return (
        <Layout errors={props.errors}>
            <Head title={personagem.name} />
            <ValidationErrors errors={errors} />
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
                                                    <Col className="bg-gray-300 p-1"> 
                                                        <Label forInput="name" value="Nome" />
                                                        <Input name="name" className="" value={data.name}  handleChange={onHandleChange}/>
                                                    </Col>
                                                </Col>
                                                <Col xs={12} md={6} className="mt-4"> 
                                                    <Col className=" bg-gray-300 p-1">
                                                        <Label forInput="species" value="Espécie" />
                                                        <Input name="species" className="" value={data.species} handleChange={onHandleChange}/>
                                                    </Col>
                                                </Col>
                                                <Col xs={12} md={6} className="mt-5 ml-5">
                                                    <Button type="submit" variant="flat" className="">Editar personagem</Button>
                                                </Col>
                                                <Col xs={12} md={6} className="mt-5 ml-5">
                                                    <Button type="button" variant="warning" className="" target={destroy}>Excluir personagem</Button>
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