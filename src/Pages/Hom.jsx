import React from 'react';
import { Link } from 'react-router';
import AppCard from '../components/AppCard/AppCard';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../components/LoadingSpinner';
import Banner from '../components/Banner/Banner';

const Hom = () => {
    // const apps = useLoaderData()

    const { apps, loading } = useApps()
    const homeApps = apps.slice(0, 8)

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='mt-10'>
            <Banner></Banner>
            <div className="text-center my-10">
                <h1 className='text-5xl font-bold m-5'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us </p>
            </div>
            <div className='md:p-10 sm:p-30 m-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 md:gap-10 sm:20px mx-auto'>
                {
                    homeApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
            <div className="text-center my-10">
                <Link className='btn btn-primary' to='/apps' >See all Apps</Link>
            </div>
        </div>
    );
};

export default Hom;