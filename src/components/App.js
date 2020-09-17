import React, { useState, useEffect } from "react";
import M from "materialize-css";
import MainInfo from './MainInfo';
import Table from './Table';

const App = () => {

  useEffect(() => {
    M.AutoInit();
  });

  const [state, setState] = useState({
    orderName:"",
    board:"",
    data:[{
      id:1,
      shapeName:"",
      shapeLength:"",
      veneer1:"",
      veneer2:"",
      shapeWidth:"",
      veneerL:"",
      veneerR:"",
    },
    {
      id:2,
      shapeName:"",
      shapeLength:"",
      veneer1:"",
      veneer2:"",
      shapeWidth:"",
      veneerL:"",
      veneerR:"",
    }]
  });

  const handleInputChange = (e, id) => {
    const newData = state.data.map(item => {
      if(item.id !== id){
        return item;
      } else {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        item[name] = value;

        // const newParametrs = state.data[item.id];
        // console.log(newParametrs)
        // newParametrs[name] = value;
        // console.log(newParametrs)

       return {...item}
      }
    });

    setState({
      ...state, data:[...newData]
    })
  }

const handleMainInfo = e => {
  const value = e.target.value;
  const name = e.target.name;
  
  setState({
    ...state, [name]:value
  })
}

  return(
    <>
      <MainInfo handleMainInfo={ handleMainInfo } info={state}/>
      <Table handleInputChange={ handleInputChange } data={ state.data }/>
    </>
  )
}

export default App;
