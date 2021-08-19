import React from 'react';
import ValidationErrors from '@/Components/ValidationErrors';
import { Inertia } from '@inertiajs/inertia';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Row, Col, Container,Image } from 'react-bootstrap';
import Layout from '@/Layouts/Layout';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import DeleteButton from '@/Components/DeleteButton';
import Button from '@/Components/Button';

export default function MeuPersonagemDetalhe(props) {
    const personagem = props.personagem;
    const { data, setData, put, errors } = useForm({
        id: personagem.id || '',
        name: personagem.name || '',
        image: personagem.image || '',
        species: personagem.species || '',
        url: personagem.url || '',
        location: personagem.location || '',
        gender: personagem.gender || '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    function destroy() {
        if (confirm('Tem certeza que deseja excluir seu personagem?')) {
            Inertia.delete(route('meu.personagem.delete', data.id));
        }
    }

    const submit = (e) => {
        e.preventDefault(); 
        put(route('meu.personagem.update', data.id));
    };

    return (
        <Layout errors={props.errors}>
            <Head title={data.name} />
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
                                                <Col xs={12} md={12} className="mt-3"> 
                                                    <Col className="bg-gray-300 p-1"> 
                                                        <Label forInput="name" value="Nome" />
                                                        <Input name="name" className=" w-full" value={data.name}  handleChange={onHandleChange}/>
                                                    </Col>
                                                </Col>
                                                <Col xs={12} md={6} className="mt-4"> 
                                                    <Col className=" bg-gray-300 p-1">
                                                        <Label forInput="species" value="Espécie" />
                                                        <Input name="species" className="w-full" value={data.species} handleChange={onHandleChange}/>
                                                    </Col>
                                                </Col>
                                                <Col xs={12} md={6} className="mt-4"> 
                                                    <Col className="bg-gray-300 p-1"> 
                                                        <Label forInput="gender" value="Gênero" />
                                                        <Input name="gender" className="w-full" value={data.gender}   handleChange={onHandleChange}/>
                                                    </Col>
                                                </Col>
                                                <Col xs={12} md={12} className="mt-3 mb-5"> 
                                                    <Col className="bg-gray-300 p-1"> 
                                                        <Label forInput="location" value="Localização" />
                                                        <Input name="location" className="w-full" value={data.location} handleChange={onHandleChange} />
                                                    </Col>
                                                </Col>
                                               
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>  
                                        <Col xs={12} md={{ span: 2, offset:10}} className="mt-5">
                                            <Col xs={12} md={6} className="">
                                                <Button  className="bg-blue-900">Editar personagem</Button>
                                            </Col>
                                            <Col xs={12} md={6} >
                                                <DeleteButton onDelete={destroy} children="Excluir personagem"/>
                                            </Col>
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