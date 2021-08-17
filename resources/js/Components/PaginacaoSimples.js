import React from 'react';
import { Button } from 'react-bootstrap';

export default function Paginacao({ paginacao }) {
    return (
        <div className="m-3 d-flex justify-content-center">
            {paginacao.anterior ? (
                <Button href={route('page', paginacao.anterior)} variant="link" className="m-2">Anterior</Button>
            ) : (
                <Button variant="link" disabled className="m-2">Anteriror</Button>
            )}
            {' '}
            {paginacao.proxima ? (
                <Button href={route('page', paginacao.proxima)} variant="link" className="m-2">Próxima</Button>
            ) : (
                <Button variant="link" disabled className="m-2">Próxima</Button>
            )}
        </div>
    );
}
