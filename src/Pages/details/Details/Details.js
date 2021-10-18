import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id, } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/services.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const personalDetail = data.filter(dt => dt.id == id);
    return (
        <div className="container">

            <div className="single-service">
                <h2>{id}</h2>
                <img width="100%" src={personalDetail[0]?.img} alt="" />
                <h2>{personalDetail[0]?.name}</h2>
                <p>{personalDetail[0]?.experience}</p>
                <p>{personalDetail[0]?.description}</p>
            </div>
        </div>
    );
};

export default Details;