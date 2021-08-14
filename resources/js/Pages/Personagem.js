import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/inertia-react';

export default function Personagem(props) {
    return (
        <Layout errors={props.errors}>
            <Head title="Meus personagens"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">M E U S  P E R S O N A G E N S</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
