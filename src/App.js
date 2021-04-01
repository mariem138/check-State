import './App.css';
import {Component} from 'react'
import Profil from './Component/Profil/Profil';
export default class App extends Component {

  state={
  person:  {
  FullName:"Sophia Amoruso",
  Bio:"She stepped down as Nasty Gal’s CEO and watched the company file for bankruptcy, but this was just a setback and went on to develop her new venture, Girlboss, a site that’s dedicated to advising and empowering women on wellness, beauty, careers and more. Although she went from having a net worth of $280 million in 2016 to $5 million today, her entrepreneurial spirit landed her a spot on this list!",
  imgSrc:"sophia-amoruso.png",
  Profession:"Nasty Gal’s CEO"},
  showhide:true,
  count:0,
  
  };
  
   componentDidMount(){
    setInterval(()=>this.setState({ count: this.state.count + 1 }), 500);
   }
     render()
     {
       return(
       <div className="App">
       <button onClick={()=>this.setState ({showhide : !this.state.showhide})}>
  
       {this.state.showhide ? "hide" : "show"} </button>
  
  {
    this.state.showhide ? 
    <Profil FullName={this.state.person.FullName} Bio={this.state.person.Bio} Profession={this.state.person.FullName} imgSrc={this.state.person.imgSrc}/>
    :null
     }
    
  </div>

)
   }
  }
