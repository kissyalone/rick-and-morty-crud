import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/inertia-react';

export default function Home(props) {
    return (
        <Layout errors={props.errors}>
            <Head title="Início" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">C A R R O S E L</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
