import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../components/AppCard/AppCard';

const Hom = () => {
    const apps = useLoaderData()
    // console.log(apps)
    return (
        <div className='m-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {
                apps.map(app =><AppCard key={app.id} app={app}></AppCard>)
            }
        </div>
    );
};

export default Hom;