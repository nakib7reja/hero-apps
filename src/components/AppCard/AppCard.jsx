import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { id, image, title, ratingAvg, downloads } = app
    return (
        <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100 shadow-sm hover:scale-110 transition ease-in-out">
                <figure className='w-[80%] mx-auto'>
                    <img
                        className='w-50 h-50 object-contain'
                        src={image}
                        alt="AppsImg" />
                </figure>
                <div className="card- p-3 my-2">
                    <h2 className="card-title text-2xl mb-2">{title}</h2>
                    <div className="flex justify-around gap-10">
                        <p className='flex gap-1 py-1 px-2 rounded-2xl text-center font-semibold bg-green-100 text-green-500'>
                            <img className='w-4 h-4 mt-1 ' src="https://i.ibb.co.com/DgQ4yhRx/icon-downloads.png" alt="" />
                            {downloads}M</p>
                        <p className='flex gap-1  py-1 px-2  rounded-2xl text-center font-semibold bg-orange-100 text-orange-500'>
                            <img className='w-4 h-4 mt-1 ' src="https://i.ibb.co.com/B5xBqrV6/icon-ratings.png" alt="" />
                            {ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;