import React from 'react'

function Body() {
  return (
    <>
    <div className="body">
        <div className="filter">
            <button className='filter-btn'>Filter</button>
        </div>
        <div className="resto-container">
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>

        </div>
    </div>
    </>
  )
}

export default Body
