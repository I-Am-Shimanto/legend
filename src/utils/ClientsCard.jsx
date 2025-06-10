import React from 'react'
import { FaStar } from 'react-icons/fa';

const ClientsCard = ({body,image,title}) => {
  return (
    <>
      <div className="linear p-8.5 rounded-2xl h-fit">
        <p className="text-lg font-normal font-inter text-secondary leading-7">
          {body}
        </p>
        <div className='flex items-center gap-4 mt-11'>
          <img src={image} alt="image" />
          <div>
            <div className="star flex items-center text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
                      <p className='mt-1 text-base font-semibold font-inter text-white leading-6'>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientsCard