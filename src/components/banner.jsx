import React from 'react'

function banner() {
  return (
    <div className='py-32 bg-local bg-center bg-cover bg-[url("https://traveldigg.com/wp-content/uploads/2016/04/Great-Wall-of-China_11.jpg")]'>
        <div className="flex justify-center">
                <h1 className='font-semibold underline underline-offset-8 text-white text-center text-4xl'>Lorem ipsum dolor <br /> sit amet consectetur adipisicing</h1>
            </div>
            <div className='flex justify-center text-white '>
                <p className='text-center my-4 text-2xl font-thin'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit</p>
            </div>
            <div className='flex justify-center'>
                <button className='w-16 h-16 my-8 bg-orange-500 rounded-full'><box-icon name='down-arrow-alt' color="white" size="lg"></box-icon></button>
            </div>
        <div/>
    </div>
  )
}

export default banner