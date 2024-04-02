import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/restaurant_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" style={{width:'100px'}} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Body =()=>{
return(
    <>
    <div className="body">
        <div className="search">
            Search
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

const RestoCard = ()=>{
    return(
        <>
        <div className="restaurant-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10" className="resto-logo" alt="" />
           <h3>Dine Ease</h3>
           <h4>Pizza, Meditarrian</h4>
           <h4>4.4 stars </h4>
           <h4>38mins </h4>
        </div>
        </>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
