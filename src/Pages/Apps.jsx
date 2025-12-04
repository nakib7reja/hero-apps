import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../components/AppCard/AppCard';

const Apps = () => {
    const [search, setSearch] = useState('')
    const { apps } = useApps()

    const term = search.trim().toLocaleLowerCase();
    // console.log(term)
    const searchApps = term ?
        apps.filter(app => app.title.toLocaleLowerCase().includes(term)) :
        apps
    console.log(searchApps)

    return (
        <div className='max-w-[1200px] mx-auto p-5 md:p-10 sm:p-30'>
            <div className="flex justify-between my-10">
                <h1 className='text-3xl font-semibold'>({searchApps.length}) Apps Found</h1>
                <label className="input">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="Search App" />
                </label>
            </div>
            <div className='m-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 md:gap-10 sm:20px mx-auto'>
                {
                    searchApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Apps;