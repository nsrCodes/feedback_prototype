import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import { base } from '../base';

import { WaveLoading } from 'react-loadingg';
import '../App.css'
import Top from './top'
function Selection ({back}){

	// different state variables for different purposes

	// list of options
	const [options, setOption] = useState([])

	// loading indicator while fetching the data
	const [loading, setLoading] = useState(true)

	// redirecting indicator for when database is succesfully updated
	const [redirect, setRedirect] = useState(false)

	// keeping track of the selected choice
	const [selected, setSelected] = useState(null)


	// handlling the user's selections of choice
  const handleSelection = (index)=>{
  	let newOptions = [...options]

  	// When choice is selected for the first time
  	if(!selected)
  	{
	  	newOptions[index].isSelected = true
	  } 

	  // When user changes choice 
	  else {
	  	if(selected===index) return

	  	newOptions[selected].isSelected = false
	  	newOptions[index].isSelected = true
	  }

	  // Updating state variables
	  setOption(newOptions) 
	  setSelected(index)
  }

  // handling final submission of choice
  const handleSubmit = ()=>{
  	console.log(options)

  	// Finding index of selected variable
  	const index = options.indexOf(options.find(option => option.isSelected))

  	// updating database
  	base.update(`Options/${index}`, {
		  data: { count: options[index].count+1 },
		  then(err) {
		    if (!err) {
		      console.log('successfully updated')
		    }
		  }
		});

  	// Setting redirect state variable to true after successful update
  	setRedirect(true)
  }

  // fetching existing choices from the database
  useEffect(()=>{
		base.fetch('Options', {
      context: this,
      then: (newOptions) => {
        setOption(newOptions)
        setLoading(false)
      		}})
	},[])


  return(
  	<div className="feedback">
  	<Top text="Feedback" />
  	<div className="selections main">

  	{
  		// checing if data has been submitted and then redirecting to end
  	}
  	{ redirect ? (<Redirect push to="/feedback/end"/>) : null }

  	{
  		// temporary loading element till data is fetched
  	}
  	{ loading?
  		(<WaveLoading />):

  		// mapping over list of fetched options  
	  	(<div>
	  		<h3 className="heading">Why are you leaving?</h3>
	  		<form onSubmit={handleSubmit}>

	  	  		{options.map((option,index) => (
	  	  			<input 
	  		  			key = {index}
	  						className = {index===selected?"choices selected":"choices"}
	  						type="button" 
	  						value ={`📌 ${option.text}`}
	  						onClick={()=>handleSelection(index)} /> ))}
	  	  		
	  	  		<input id="submit" type="submit" value="Submit ✅" />
	  	  	</form>
	  	  	</div>)
  	}
	  </div>
	  </div>
  )
 


}

export default Selection;

