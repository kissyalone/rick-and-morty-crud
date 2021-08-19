import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head, usePage } from '@inertiajs/inertia-react';
import PersonagensCards from '@/Components/PersonagensCards';
import MeusPersonagensCards from '@/Components/MeusPersonagensCards';


export default function Home(props) {
    const { personagens, title, routeName, paginacao } = usePage().props;
    const {data, links} = personagens;
    return (
        <Layout errors={props.errors}>
            <Head title={title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <div className="p-6 bg-gray-100">
                            {data ? (
                                <MeusPersonagensCards personagens={data} routeName={routeName} paginacao={links}/>
                            ): (
                                <PersonagensCards personagens={personagens}  routeName={routeName} paginacao={paginacao} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
