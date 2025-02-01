import React from 'react'
import { Button } from "@/components/ui/button"


const NotFoundPage = () => {
  return (
    <div className='NotFoundPage flex-grow min-h-screen bg-gray-200'>
        <div className='flex flex-col items-center '>
            <h1>Hoppsan sidan hittades inte</h1>
            <Button size={'lg'} className='w-20'>Tillbaka</Button>
        </div>
    </div>
  )
}

export default NotFoundPage
