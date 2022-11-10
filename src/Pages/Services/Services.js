import React, { useEffect, useState } from 'react';
import useSetTitles from '../../Hook/useSetTitels';
import ServicesCard from './ServicesCard';

const Services = () => {
    useSetTitles('Services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-eta.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-20'>
            <h2 className='text-4xl font-semibold my-6 pl-5'>All Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3'>
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