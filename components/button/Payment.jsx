import React from 'react'


const Payment = () => {
  return (
    <div className="flex space-x-4 text-sm">
                <button className="bg-blue-600 text-white text-xs px-8 py-3 rounded-full flex items-center space-x-2">
                  <span>Pay with IDR</span>
                </button>
                <button className="bg-gray-800 text-white text-xs px-6 py-3 rounded-full flex items-center space-x-2">
                  <span>Pay by USD</span>
                </button>
              </div>
  )
}

export default Payment