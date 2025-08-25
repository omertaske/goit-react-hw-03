import React from 'react'

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
<div className="my-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="İsim ara..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-3 rounded-xl border-2 border-amber-400 
                   shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 
                   focus:border-amber-500 transition-all duration-300 
                   placeholder-gray-400 text-gray-800"
      />
    </div>
    </div>
  )
}

export default SearchBox