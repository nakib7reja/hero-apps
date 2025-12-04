import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../components/AppCard/AppCard';

const Hom = () => {
    const apps = useLoaderData()
    const homeApps = apps.slice(0, 7)
    // console.log(apps)
    return (
        <>
            <div className="text-center my-10">
                <h1 className='text-5xl font-bold m-5'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us </p>
            </div>
            <div className='m-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-auto'>
                {
                    homeApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
            <div className="text-center my-10">
                {/* <a>See All</a> */}
                <Link className='btn btn-primary' to='/apps' >See all Apps</Link>
                {/* <button>See All</button> */}
            </div>
        </>
    );
};

export default Hom;