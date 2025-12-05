import React, { useEffect, useState } from 'react';
import InstallCard from '../components/InstallCard';
import { toast } from 'react-toastify';

const InstalledApp = () => {
    const [installedList, setInstalledList] = useState([])
    const [sortOrder, setSortOrder] = useState('none')



    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('installedList'))
        if (savedData) setInstalledList(savedData)
    }, [])

    const sortedItem = (() => {
        if (sortOrder === 'price-asc') {
            return [...installedList].sort((a, b) => a.downloads  - b.downloads)
        } else if (sortOrder === 'price-desc') {
            return [...installedList].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installedList
        }
    })()

    const removeApp = id => {
        toast('Uninstall!!!')
        const existingList = JSON.parse(localStorage.getItem('installedList'))
        let updatedList = existingList.filter(ap => ap.id !== id)
        setInstalledList(updatedList)
        localStorage.setItem('installedList', JSON.stringify(updatedList))
    }

    return (
        <div className='max-w-[1200px] mx-auto px-10'>
            <div className="text-center my-10 space-y-3">
                <h1 className='text-5xl font-bold'>Your Installed Apps</h1>
                <p className="text-xl">Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* sort area */}
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{installedList.length} Apps Found</h1>

                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by download</option>
                        <option value='price-asc'>Low-&gt;High</option>
                        <option value='price-desc'>High-&gt;Low</option>
                    </select>
                </label>
            </div>

            <div className="m-5 ">
                {
                    sortedItem.map(app => <InstallCard key={app.id} app={app} removeApp={removeApp}></InstallCard>)
                }
            </div>
        </div>
    );
};

export default InstalledApp;