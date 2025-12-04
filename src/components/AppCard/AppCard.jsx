import React from 'react';

const AppCard = ({ app }) => {
    const { image, title, ratingAvg, downloads } = app
    return (
        <div className="card bg-base-100 w-60 shadow-sm mx-auto hover:scale-110 transition ease-in-out">
            <figure className='w-[80%] mx-auto'>
                <img
                    className='w-50 h-50 object-contain'
                    src={image}
                    alt="AppsImg" />
            </figure>
            <div className="card- p-3 my-2">
                <h2 className="card-title text-2xl mb-2">{title}</h2>
                <div className="flex justify-around gap-10">
                    <p className='flex gap-1 py-1 px-2 rounded-2xl text-center font-bold bg-green-100 text-green-500'>
                        <img className='w-4 h-4 mt-1 ' src="https://i.ibb.co.com/DgQ4yhRx/icon-downloads.png" alt="" />
                        {downloads}M</p>
                    <p className='flex gap-1  py-1 px-2  rounded-2xl text-center font-bold bg-orange-100 text-orange-500'>
                        <img className='w-4 h-4 mt-1 ' src="https://i.ibb.co.com/B5xBqrV6/icon-ratings.png" alt="" />
                        {ratingAvg}</p>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Install</button>
                </div> */}
            </div>
        </div>
    );
};

export default AppCard;