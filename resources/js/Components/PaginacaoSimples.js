import React from 'react';
import Button from '@/Components/Button';
import { Link } from '@inertiajs/inertia-react';

export default function Paginacao({ paginacao }) {
    return (
        <div className="mt-5 d-flex justify-content-center">
            {paginacao.anterior ? (
                <Link href={route('page', paginacao.anterior)} style={{ textDecoration: 'none' }}>
                    <Button className="bg-blue-700 m-2">
                        Anterior
                    </Button>
                </Link>
            ) : (
                
                <Button className="bg-blue-700 m-2" processing>
                    Anterior
                </Button>
            )}
            {' '}
            {paginacao.proxima ? (
                <Link href={route('page', paginacao.proxima)} style={{ textDecoration: 'none' }}>
                    <Button className="bg-blue-700 m-2">
                    Próxima
                    </Button>
                </Link>
            ) : (
                <Button className="bg-blue-700 m-2" processing>
                    Próxima
                </Button>
            )}
        </div>
    );
}
