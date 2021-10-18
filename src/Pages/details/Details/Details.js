import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>details {id}</h2>
        </div>
    );
};

export default Details;