import React, { Component} from 'react';
import {Option, OptionForm} from './options';

import { base } from '../base'

import { WaveLoading } from 'react-loadingg';
import Top from './top';


class Admin extends Component{


	constructor(props){
		super(props);
		this.addOption = this.addOption.bind(this)
		this.removeOption = this.removeOption.bind(this)
		this.editOption = this.editOption.bind(this)
		this.updateOption = this.updateOption.bind(this)
	}

	// This will be updated on its own when linked to firebase
	state = {
			options: {isLoading: true}
		};
	
	 // Makes a linkage between the state and the realtime database
	componentWillMount(){
		this.optionsRef = base.syncState ('Options',{
			context: this,
			state: 'options'
		})

	}

	// Will close the linkage when the component is unmounted
	componentWillUnmount(){
		base.removeBinding(this.optionsRef);
	}


	// Function to add choices
  addOption(text){
    const newOptions = [...this.state.options, {text,count: 0, isSelected:false}];
    this.setState({options: newOptions})
    console.log('added')
  }

  // Function to remove an option
  removeOption (index) {
    const newOptions = [...this.state.options]
    newOptions.splice(index,1)
    this.setState({options: newOptions})
  }

  // Chaneges the DOM to show a selected option that has to be updated
  editOption(index) {
    let newOptions = [...this.state.options]
    newOptions[index].isSelected = true;
    this.setState({options: newOptions})
  }

  // Updates the selected option in the state and hence also in the db
   updateOption (value, index) {
    let newOptions = [...this.state.options]
    newOptions[index].isSelected = false;
    if(value===""){
    	this.removeOption(index)
  		return
    }
    newOptions[index].text = value;
    this.setState({options: newOptions})
  }

  render(){
  return(
     <React.Fragment>
     <Top text="Admin Dashboard" />
     	{// Temporary loadding element while link to database is made
     }
     	{this.state.options.isLoading? <WaveLoading />:
	     
	     <div className="main">
	     	{console.log(this.state)}
	     		<h3 className="heading">Reasons provided</h3>
		      <div className="option-list">

		      {// mapping over all the options in the db to render in DOM
		      }
		        {this.state.options.map((option,index)=> (
		          <Option 
		          key={index} 
		          index={index} 
		          option={option}
		          removeOption = {this.removeOption}
		          editOption={this.editOption}
		          updateOption={this.updateOption}/>
		        ))}
		       </div>

		      {// Form for addding new option
		      }
	        <OptionForm addOption={this.addOption} />

	       </div>
     	}
     </React.Fragment> 
    )
	}
 }

export default Admin;