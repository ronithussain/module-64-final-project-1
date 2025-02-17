import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center my-12 md:w-4/12'>
            <p className='text-yellow-600 mb-1'>---{subHeading}---</p>
            <h3 className='lg:text-4xl md:text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;