import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Layout from '@/Layouts/Layout';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Row, Col, Container } from 'react-bootstrap';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Layout>
            <Head title="Registrar-se"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg- white border-b border-gray-200">
                            <div className="flex items-center justify-center m-2">
                                    <h1>Criar conta</h1>
                            </div>
                            <form onSubmit={submit}>
                                <Container>
                                    <Row>
                                        <Col xs={12} md={{ span: 10, offset:1}}>
                                            <Col className="bg-gray-300 p-1"> 
                                                <Label forInput="name" value="Nome" />
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    value={data.name}
                                                    className=" w-full"
                                                    autoComplete="username"
                                                    isFocused={true}
                                                    handleChange={onHandleChange}
                                                />
                                            </Col>
                                        </Col>

                                        <Col xs={12} md={{ span: 10, offset:1}}>
                                            <Col className="bg-gray-300 p-1"> 
                                                <Label forInput="email" value="Email" />
                                                <Input
                                                    type="text"
                                                    name="email"
                                                    value={data.email}
                                                    className=" w-full"
                                                    autoComplete="username"
                                                    isFocused={true}
                                                    handleChange={onHandleChange}
                                                />
                                            </Col>
                                        </Col>

                                        <Col xs={12}  md={{ span: 10, offset:1}}>
                                            <Col className="bg-gray-300 p-1"> 
                                                <Label forInput="password" value="Senha" />
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="w-full"
                                                    autoComplete="current-password"
                                                    handleChange={onHandleChange}
                                                />
                                            </Col>
                                        </Col>

                                        <Col xs={12}  md={{ span: 10, offset:1}}>
                                            <Col className="bg-gray-300 p-1"> 
                                                <Label forInput="password_confirmation" value="Confirmar Senha" />
                                                <Input
                                                    type="password"
                                                    name="password_confirmation"
                                                    value={data.password_confirmation}
                                                    className="w-full"
                                                    autoComplete="current-password"
                                                    handleChange={onHandleChange}
                                                />
                                            </Col>
                                        </Col>
                                    </Row>
                                    <Col xs={12}  md={{ span: 2, offset:10}}>
                                        <Button className=" bg-blue-900 text-white mt-5" processing={processing}>
                                            Registrar-se
                                        </Button>
                                    </Col>
                                </Container>

                                <div className="flex items-center justify-center">
                                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                                        Já possui conta? Entrar
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </Layout>
    );
}
