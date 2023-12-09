import React from 'react'

function foot() {
  return (
    <div>
        <div className='mt-12'>
            <h1 className='text-3xl font-semibold text-center text-gray-600'>Lorem ipsum dolor sit</h1>
        </div>
        <div>
            <p className='text-xl font-thin text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est!</p>
        </div>
        <div className='mt-8'>
            <div className='flex items-center justify-center'>
                <hr className='w-2/5 mr-4'/>
                <box-icon name='left-arrow-circle' type='solid' color='#cb7a0a' ></box-icon>
                <box-icon name='right-arrow-circle' type='solid' color='#cb7a0a' ></box-icon>
                <hr className='w-2/5 ml-4'/>
            </div>
        </div>
    </div>
  )
}

export default foot