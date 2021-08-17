import React from 'react';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Row, Col, Container, Button,Image, Form,InputGroup } from 'react-bootstrap';
import Layout from '@/Layouts/Layout';

export default function PersonagemDetalhe(props) {
    const personagem = props.personagem;
    const { data, setData, post, processing, errors, reset } = useForm({
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

    const submit = (e) => {
        e.preventDefault(); 
        post(route('personagem.store'));
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
                                                 <Form.Group as={Row} className="mb-3"   >
                                                     <Form.Label column sm={1}> Nome: </Form.Label>
                                                     { 
                                                         active ?
                                                             (<Col sm={11}> <Form.Control type="text" value={data.name} onChange={e => setData('name', e.target.value)}/> </Col>)
                                                         :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.name} onChange={e => setData('name', e.target.value)}/> </Col>)
                                                     }
                                                 </Form.Group>
                                                 <Form.Group as={Row} className="mb-3" >
                                                         <Col xs={12} md={6}> 
                                                             <Form.Label column sm={1}> Especie </Form.Label>
                                                             { 
                                                                 active ?
                                                                     (<Col sm={11}> <Form.Control type="text" value={data.species} onChange={e => setData('species', e.target.value)}/> </Col>)
                                                                 :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.species} onChange={e => setData('species', e.target.value)}/> </Col>)
                                                             }
                                                            
                                                         </Col>
                                                         <Col xs={12} md={6}>
                                                             <Form.Label column sm={1}> Localização </Form.Label>
                                                             { 
                                                                 active ?
                                                                     (<Col sm={11}> <Form.Control type="text" value={data.location} onChange={e => setData('location', e.target.value)}/> </Col>)
                                                                 :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.location} onChange={e => setData('location', e.target.value)}/> </Col>)
                                                             }
                                                         </Col>
                                                 </Form.Group>
                                                 <Form.Group as={Row} className="mb-3" >
                                                         <Col xs={12} md={4}>
                                                             <Form.Label column sm={1}> Origem </Form.Label>
                                                             { 
                                                                 active ?
                                                                     (<Col sm={11}> <Form.Control type="text" value={data.origin} onChange={e => setData('origin', e.target.value)}/> </Col>)
                                                                 :   (<Col sm={11}> <Form.Control type="text"  readOnly value={data.origin} onChange={e => setData('origin', e.target.value)}/> </Col>)
                                                             }
                                                         </Col>
                                                         <Col xs={12} md={4}>
                                                             <Form.Label column sm={1}> Genero </Form.Label>
                                                             { 
                                                                 active ?
                                                                     (<Col sm={11}> <Form.Control type="text" value={data.gender} onChange={e => setData('gender', e.target.value)}/> </Col>)
                                                                 :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.gender} onChange={e => setData('gender', e.target.value)}/> </Col>)
                                                             }
                                                         </Col>
                                                         <Col xs={12} md={4}>
                                                             <Form.Label column sm={1}> Status </Form.Label>
                                                             { 
                                                                 active ?
                                                                     (<Col sm={11}> <Form.Control type="text" value={data.status} onChange={e => setData('status', e.target.value)}/> </Col>)
                                                                 :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.status} onChange={e => setData('status', e.target.value)}/> </Col>)
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
























































// import React, {useState} from 'react';
// import Layout from '@/Layouts/Layout';
// import { Head, InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
// import { Link } from '@inertiajs/inertia-react';
// import { Row, Col, Container, Button,Image, Form,InputGroup } from 'react-bootstrap';
// import { Inertia } from '@inertiajs/inertia'

// export default function PersonagemDetalhe(props) {
    // const personagem = props.personagem;
    // const { data, setData, errors, post, processing } = useForm({
    //     name: personagem.name || '',
    //     image: personagem.image || '',
    //     species: personagem.species || '',
    //     url: personagem.url || '',
    //     location: personagem.location.name || '',
    //     gender: personagem.gender || '',
    //     origin: personagem.origin.name || '',
    //     status: personagem.status || '',
    // });
    // const active = false;
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     post(route('personagem.store'));
    // }





    // const [values, setValues] = useState({
    //     name: "",
    //     password: "",
    //     email: "",
    //   })
    
    //   function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value
    //     setValues(values => ({
    //         ...values,
    //         [key]: value,
    //     }))
    //   }
    
    //   function handleSubmit(e) {
    //     e.preventDefault()
    //     Inertia.post('/teste', values)
    //   }
    // return (
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="name">name:</label>
    //       <input id="name" value={values.name} onChange={handleChange} />
    //       <label htmlFor="password">password:</label>
    //       <input id="password"  type="password" value={values.password} onChange={handleChange} />
    //       <label htmlFor="email">Email:</label>
    //       <input id="email" value={values.email} onChange={handleChange} />
    //       <button type="submit">Submit</button>
    //     </form>
    //   )
// }
    // return (
    //     <Layout errors={props.errors}>
    //         <Head title={personagem.name} />
    //         <div className="py-12">
    //             <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
    //                 <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
    //                     <div className="p-6 bg-white border-b border-gray-200">
    //                         <form onSubmit={handleSubmit}>
    //                             <Container>
    //                                 <Row>
    //                                     <Col xs={12} md={4}>
    //                                         <Image src={data.image} roundedCircle />
    //                                     </Col>
    //                                     <Col xs={12} md={8}>
    //                                         <Row>
    //                                             <Form.Group as={Row} className="mb-3"   >
    //                                                 <Form.Label column sm={1}> Nome: </Form.Label>
    //                                                 { 
    //                                                     active ?
    //                                                         (<Col sm={11}> <Form.Control type="text" value={data.name} onChange={e => setData('name', e.target.value)}/> </Col>)
    //                                                     :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.name} onChange={e => setData('name', e.target.value)}/> </Col>)
    //                                                 }
    //                                             </Form.Group>
    //                                             <Form.Group as={Row} className="mb-3" >
    //                                                     <Col xs={12} md={6}> 
    //                                                         <Form.Label column sm={1}> Especie </Form.Label>
    //                                                         { 
    //                                                             active ?
    //                                                                 (<Col sm={11}> <Form.Control type="text" value={data.species} onChange={e => setData('species', e.target.value)}/> </Col>)
    //                                                             :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.species} onChange={e => setData('species', e.target.value)}/> </Col>)
    //                                                         }
                                                            
    //                                                     </Col>
    //                                                     <Col xs={12} md={6}>
    //                                                         <Form.Label column sm={1}> Localização </Form.Label>
    //                                                         { 
    //                                                             active ?
    //                                                                 (<Col sm={11}> <Form.Control type="text" value={data.location} onChange={e => setData('location', e.target.value)}/> </Col>)
    //                                                             :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.location} onChange={e => setData('location', e.target.value)}/> </Col>)
    //                                                         }
    //                                                     </Col>
    //                                             </Form.Group>
    //                                             <Form.Group as={Row} className="mb-3" >
    //                                                     <Col xs={12} md={4}>
    //                                                         <Form.Label column sm={1}> Origem </Form.Label>
    //                                                         { 
    //                                                             active ?
    //                                                                 (<Col sm={11}> <Form.Control type="text" value={data.origin} onChange={e => setData('origin', e.target.value)}/> </Col>)
    //                                                             :   (<Col sm={11}> <Form.Control type="text"  readOnly value={data.origin} onChange={e => setData('origin', e.target.value)}/> </Col>)
    //                                                         }
    //                                                     </Col>
    //                                                     <Col xs={12} md={4}>
    //                                                         <Form.Label column sm={1}> Genero </Form.Label>
    //                                                         { 
    //                                                             active ?
    //                                                                 (<Col sm={11}> <Form.Control type="text" value={data.gender} onChange={e => setData('gender', e.target.value)}/> </Col>)
    //                                                             :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.gender} onChange={e => setData('gender', e.target.value)}/> </Col>)
    //                                                         }
    //                                                     </Col>
    //                                                     <Col xs={12} md={4}>
    //                                                         <Form.Label column sm={1}> Status </Form.Label>
    //                                                         { 
    //                                                             active ?
    //                                                                 (<Col sm={11}> <Form.Control type="text" value={data.status} onChange={e => setData('status', e.target.value)}/> </Col>)
    //                                                             :   (<Col sm={11}> <Form.Control type="text" plaintext readOnly value={data.status} onChange={e => setData('status', e.target.value)}/> </Col>)
    //                                                         }
    //                                                     </Col>
    //                                             </Form.Group>
    //                                             <Form.Group as={Row} className="mb-3" >
    //                                                 <Col xs={12} md={12}>
    //                                                     {active ? (
    //                                                         <Col xs={12} md={4}>
    //                                                             <Button>Editar</Button>
    //                                                             {' '}
    //                                                             <Button>Excluir</Button>
    //                                                         </Col>
    //                                                     ) : (
    //                                                         <Col xs={12} md={4}>
    //                                                             <Button type="submit">Salvar</Button>
    //                                                         </Col>
    //                                                     ) }
    //                                                 </Col>
    //                                             </Form.Group>
    //                                         </Row>
    //                                     </Col>
    //                                 </Row>
    //                             </Container>
    //                         </form>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </Layout>
    // );
    // }
