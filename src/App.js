import React from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import Data from "./Component/Data.json";
import SelectedBeast from "./Component/SelectedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class App extends React.Component {
  //display, update  , close 
  constructor(props) {
    super(props)
    this.state = {

      data: Data,
      showModal: false,
      title: '',
      imageurl: '',
      describtion: '',
      selectedItem:Data

    }
  }


  displayBeast = () => {
    this.setState({
      showModal: true
    })
  }
  close = () => {
    this.setState({
      showModal: false
    })
  }
  updateInfomodel = (title, imageurl, describtion) => {
    this.setState({
      title: title,
      imageurl: imageurl,
      describtion: describtion
    })
  }
 changehorns=(event)=>{
   
  this.setState({
    selectedItem: this.state.data.filter(item=>{
      if(item.horns===parseInt(event.target.value)){
        return item;
      }
      else if (event.target.value==='All') {
         return item;
      }
      
      return false;
    }

    )
  })
 }


  render() {
    return (
  
      <>
    <Form  >
    <Form.Select    onChange={this.changehorns}>

  <option value="All">All</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">WoW</option>
   </Form.Select>
   </Form>

      <Header />

      <Main 
       beastData={this.state.selectedItem}  
       displayBeast={this.displayBeast} 
       updateInfomodel={this.updateInfomodel}
       />
      <Footer />

      <SelectedBeast 
      show={this.state.showModal}
      close={this.close}
      title={this.state.title}
      imageurl={this.state.imageurl}
      describtion={this.state.describtion}
      />
      
    </>
    )
  }
}
export default App;
