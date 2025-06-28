 import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white p-6'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Service Scheduler. All rights reserved.
        </p>
        <p className='text-xs mt-2'>
          Made with ❤️ by <a href=""></a></p>
      </div>
    </div>
  )
}

export default Footer
