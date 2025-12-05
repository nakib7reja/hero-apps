import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../components/LoadingSpinner';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const [toggle, setToggle] = useState(true)
    const { id } = useParams();
    const { apps, loading } = useApps()
    const app = apps.find(ap => ap.id === Number(id))

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const handleClicked = () => {
        setToggle(false)
        toast('Installed!!')
        const existingList = JSON.parse(localStorage.getItem('installedList'))
        let updatedList = []

        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === app.id)
            if (isDuplicate) return
            updatedList = [...existingList, app]
        } else {
            updatedList.push(app)
        }

        // console.log('existingList')
        localStorage.setItem('installedList', JSON.stringify(updatedList))
    }

    const { title, image, companyName, description, downloads, ratingAvg, ratings, reviews, size, } = app

    return (
        <div className='max-w-[1200px] mx-auto p-5 md:p-10 sm:p-30'>
            {/* app information */}
            <div className="flex gap-10 border-b-2 border-gray-200 p-5">
                <div className="w-[300px] h-[300px]">
                    <img className='w-full' src={image} alt="app logo" />
                </div>
                {/* content */}
                <div className="mt-5 w-full space-y-5">
                    <div className="space-y-1 border-b-2 border-gray-300 pb-3 mr-30">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p className="text-xl">Develop by: <span className="text-blue-500">{companyName}</span></p>
                    </div>
                    <div className="flex gap-10">
                        <div>
                            <img className='w-7 h-7' src="https://i.ibb.co.com/DgQ4yhRx/icon-downloads.png" alt="download" />
                            <p className='my-1 font-medium'>Downloads</p>
                            <h3 className="text-2xl font-bold">{downloads}M</h3>
                        </div>
                        <div>
                            <img className='w-7 h-7' src="https://i.ibb.co.com/B5xBqrV6/icon-ratings.png" alt="rating" />
                            <p className='my-1 font-medium'>Average Rating</p>
                            <h3 className="text-2xl font-bold">{ratingAvg}</h3>
                        </div>
                        <div>
                            <img className='w-7 h-7' src="https://i.ibb.co.com/nq4z05KH/icon-review.png" alt="review" />
                            <p className='my-1 font-medium'>Total Review</p>
                            <h3 className="text-2xl font-bold">{reviews}</h3>
                        </div>
                    </div>
                    {
                        toggle ?
                            <button onClick={() => handleClicked()} className='btn bg-green-500 text-white'>Install Now ({size}bit)</button> :
                            <button disabled className='btn bg-gray-500 text-white'>Installed</button>
                    }

                </div>
            </div>

            {/* rating chart */}
            <div className='my-5'>
                <h3 className="text-3xl font-bold">Rating</h3>
                {/*  */}
                <div className=" p- m-5 h-80">
                    <BarChart className='p-3' width={600} height={300} data={ratings}>
                        <XAxis dataKey="name" stroke="#FF8811" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend
                            width={100}
                            wrapperStyle={{
                                top: 20,
                                right: 100,
                                backgroundColor: '#f5f5f5',
                                border: '1px solid #d5d5d5',
                                borderRadius: 3,
                                // lineHeight: '40px',
                            }}
                        />
                        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                        <Bar dataKey="count" fill="#FF8811" barSize={30} />
                    </BarChart>
                </div>
            </div>

            {/* description */}
            <div className='mt-5'>
                <h3 className='text-3xl font-bold'>Description</h3>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;