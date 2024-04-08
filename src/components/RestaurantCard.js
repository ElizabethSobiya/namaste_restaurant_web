import React from 'react'

function RestaurantCard({resData}) {
    console.log(resData, 'data')
  return (
    <>
    <div className="restaurant-card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10" className="resto-logo" alt="" />
       <h3>{resData.info.name}</h3>
       <h4>Pizza, Meditarrian</h4>
       <h4>4.4 stars </h4>
       <h4>38mins </h4>
    </div>
    </>
  )
}

export default RestaurantCard
