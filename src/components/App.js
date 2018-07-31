import React, { Component } from 'react';
// import logo from './logo.svg'; // deleted the fuck out of that
import './App.css';
import Title from './title';
import List from './list';
import Gemstone from './gemstone';

// // 
// const todo1 = ["do laundry", "take out trash", "clean bathrooms"];
// const todo2=["mow the lawn", "walk the dog", "feed the birds"];
// const todo3 = ["exercise", "cook dinner", "buy mushrooms"];

// (name, shine, price, image, description)
const ruby = new Gemstone("Ruby", "so shiny", 4, "http://via.placeholder.com/350x150", "nifty red rock");
const sapphire = new Gemstone("Sapphire", "so shiny", 4, "http://via.placeholder.com/350x150", "nifty blue rock");
const lapislazuli = new Gemstone("LapisLazuli", "sparkly", 3, "http://via.placeholder.com/350x150", "sparkly blue rock");
const jasper = new Gemstone("Jasper", "sort of shiny", 3, "http://via.placeholder.com/350x150", "not really sure what this is");

class App extends Component {
  render() { //RENDER function REQUIRES a return in react. html must be wrapped in a <div></div>
    return (
      <div>
        <Title title="Bargain Bucket Gemstones" />
        {/* <div class="container"> */}
          <div class="row">
            <List gem={ruby}/>
            <List gem={sapphire}/>
          </div>
        {/* </div> */}
        {/* <div class="container"> */}
          <div class="row">
            <List gem={lapislazuli}/>
            <List gem={jasper}/>
          </div>
        {/* </div> */}


      </div>
    );
  }
}



export default App;
