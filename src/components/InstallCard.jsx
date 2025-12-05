import React from 'react';

const InstallCard = ({ app, removeApp }) => {

    const { id, title, image, downloads, ratingAvg, size, } = app
    const handleRemove = () => {
        removeApp(id)
    }

    return (
        <div className='flex justify-between items-center border border-gray-300 p-2 rounded-2xl my-5'>
            <div className="flex gap-10">
                <div className="w-20">
                    <img src={image} alt="" />
                </div>
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <div className="flex gap-5">
                        <div className='flex gap-2'>
                            <img className='w-5 h-5' src="https://i.ibb.co.com/DgQ4yhRx/icon-downloads.png" alt="download" />
                            <h3 className="text-l font-bold text-green-500">{downloads}M</h3>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-5 h-5' src="https://i.ibb.co.com/B5xBqrV6/icon-ratings.png" alt="rating" />
                            <h3 className="text-l font-bold text-orange-500">{ratingAvg}</h3>
                        </div>
                        <div>
                            <h3 className="text-l font-bold text-gray-400">{size} bit</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <button
                    onClick={() => handleRemove(id)}
                    className='btn btn-primary'
                >
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstallCard;