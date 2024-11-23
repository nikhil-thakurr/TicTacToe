import React from 'react'
import SecondaryContainer from './SecondaryContainer'

const MainContainer = () => {
  return (
    <div className='bg-blue-500 h-screen'>

            <div className='text-center font-bold text-3xl pt-20'>
                <h1>Player 1 - X </h1> 
                <h1 className='mt-4'>Player 2 - O</h1>
            </div>

            <div>

                <SecondaryContainer/>

            </div>
    </div>
  )
}

export default MainContainer