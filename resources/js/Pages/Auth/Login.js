import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Layout from '@/Layouts/Layout';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Row, Col, Container } from 'react-bootstrap';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Layout>
            <Head title="Login - Rick and Morty" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit} className="p-5">
                                <Container>
                                    <Row>
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
                                            <Col className="bg-gray-300 p-1 mt-3"> 
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
                                            <label className="flex items-center">
                                                <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                                                <span className="ml-2 text-sm text-gray-600 mt-3">Lembrar</span>
                                            </label>
                                        </Col>
                                    </Row>
                                    <Col xs={12}  md={{ span: 2, offset:10}}>
                                        <Button className=" bg-blue-900 text-white mt-5" processing={processing}>
                                            Entrar
                                        </Button>
                                    </Col>
                                </Container>
                            </form>
                            <div className=" flex justify-center">
                                <Link href={route('register')}>
                                    Cadastre-se 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </Layout>
    );
}
