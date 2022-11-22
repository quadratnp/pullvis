import React from 'react';

export default function LoginModal({visible}) {

    if(!visible) return null;
    
    return (
        <div className='bg-black bg-opacity-30 backdrop-blur-sm fixed inset-0 justify-center items-center flex'>
            <div className='bg-white p-2 rounded'>LoginModal</div>
        </div>
    )
}