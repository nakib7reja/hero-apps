import React from 'react';

const AppCard = ({ app }) => {
    const { image, title, ratingAvg, downloads } = app
    return (
        <div className="card bg-base-100 w shadow-sm">
            <figure>
                <img
                    className='w-50 h-50 object-cover'
                    src={image}
                    alt="AppsImg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-around gap-10">
                    <p className='flex gap-1 p-2 rounded-2xl text-center font-bold bg-green-100 text-green-500'>
                        <img className='w-5 h-5' src="https://i.ibb.co.com/DgQ4yhRx/icon-downloads.png" alt="" />
                        {downloads}M</p>
                    <p className='flex gap-1 p-2  rounded-2xl text-center font-bold bg-orange-100 text-orange-500'>
                        <img className='w-5 h-5' src="https://i.ibb.co.com/B5xBqrV6/icon-ratings.png" alt="" />
                        {ratingAvg}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Install</button>
                </div>
            </div>
        </div>
    );
};

export default AppCard;