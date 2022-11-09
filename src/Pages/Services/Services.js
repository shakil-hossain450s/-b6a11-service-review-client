import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-20'>
            <h2 className='text-4xl font-semibold my-8 pl-5'>All Products</h2>
            <div>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;