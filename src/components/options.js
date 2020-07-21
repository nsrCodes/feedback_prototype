import React, {useState} from 'react'
import Trash from '../images/icontrash.png'
import Edit from '../images/iconedit.png'

// component for each option on the admin dashboard
export const Option = ({option, index, removeOption, editOption, updateOption}) => {
  return(
    <div className="option">
       {option.isSelected?
          <UpdateForm 
            text={option.text} 
            index={index} 
            updateOption={updateOption}
            removeOption={removeOption}/>
          :<p>{option.text} <span className="count"> {option.count}</span></p>}
        
      <div className="buttons">
        
        <button onClick={() => removeOption(index)}><span id="emoji" role="img"><img src={Trash} alt="trash"/></span></button>
        <button onClick={() => editOption(index)}><span id="emoji" role="img"><img src={Edit} alt="edit"/></span></button>
      </div>
    </div>
  )

}

// component for adding a new options
export const OptionForm = ({addOption}) =>{

	const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addOption(value);
    if(! value) return;
    
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit} id="addOption">
      <input 
        type="text" 
        className="input" 
        value={value} 
        onChange= {e => setValue(e.target.value)} 
        placeholder="add Option"
        />
      <input id="plus" type="submit" value="➕" />
    </form>
    )
}



function UpdateForm({text, index, updateOption, removeOption}){
  const [value, setValue] = useState(text);

  const handleSubmit = e => {
    e.preventDefault();
    if(value==="") removeOption(index);
    updateOption(value,index);
    // setValue('');
  }


  return(
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        defaultValue={text} 
        placeholder="enter Option"
        onChange= {e => setValue(e.target.value)} 
      />
    </form>
  )
}
