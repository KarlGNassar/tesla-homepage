import React from 'react'
import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__items">
        <Item 
          title="Lowest Cost Solar Panel in America"
          desc="Money-back guarantee"
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
          first
        />

        <Item 
          title="Model S"
          desc="Starting at $69,420"
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons="true"
        />

        <Item 
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons="true"
        />

        <Item 
          title="Model X"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons="true"
        />

        <Item 
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons="true"
        />

        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />

        <Item 
          title="Accessories"
          desc=""
          backgroundImg={Accessories}
          leftBtnTxt="SHOP NOW"
          twoButtons="false"
        />
      </div>
    </div>
  );
}

export default App;
