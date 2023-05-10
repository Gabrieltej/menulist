import React from 'react'



const Categories = ({ filterItems, finallValues }) => {
  return (
    <div className='btn-container'>
      {finallValues.map((values, index) => {
        return (
          <div key={index}>
            <button 
              onClick={()=>{
              filterItems(values)
            }} 
             className='filter-btn'>
              {values}
              </button>
          </div>
        )
      })}
    </div>
  )
}

export default Categories
