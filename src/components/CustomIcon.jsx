import React from 'react'

function CustomIcon({ href, iconImg }) {
    return (
        <button className=''>
            <a href={`https://${href}`} target="_blank">
                <img src={iconImg}
                    className='h-full'
                />
            </a>
        </button>)
}

export default CustomIcon