import React from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurantList } from './utils/Constants'

function Body() {
  return (
    <>
    <div className="body">
        <div className="filter">
            <button className='filter-btn'>Top Rated Restaurant</button>
        </div>
        {restaurantList.map((restaurantData)=>{
           <div className="resto-container">
           <RestaurantCard resData = {restaurantData.info} key={restaurantData.info.id}/>
       </div>
        })}
    </div>
    </>
  )
}

export default Body
