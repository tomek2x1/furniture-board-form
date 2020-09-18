import React, { useState, useEffect } from "react";
import M from "materialize-css";
import MainInfo from './MainInfo';
import Table from './Table';
import Buttons from './Buttons';

const App = () => {

  const [state, setState] = useState({
    orderName:"",
    board:"",
    data:[],
    nextID:0,
  });

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    addNewRow(10);
  }, []);

// const add10rowsOnComponentMount = () => {
//   const first10Rows = [];
//   const obj = {
//     id:1,
//     shapeName:"",
//     shapeLength:"",
//     veneer1:"",
//     veneer2:"",
//     shapeWidth:"",
//     veneerL:"",
//     veneerR:"",
//   }

//   for(let i = 0; i < 10; i++){
//     first10Rows.push
//   }

// }

  const handleInputChange = (e, id) => {
    const newData = state.data.map(item => {
      if(item.id !== id){
        return item;
      } else {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        item[name] = value;

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

const addNewRow = (numerRow) => {
  const newRows = [...state.data];

const pureStateElement = (num) => {
  // console.log(newRows.length)
  // console.log(newRows[newRows.length - 1])
  return {
  id: state.nextID + num,
  shapeName:"",
  shapeLength:"",
  veneer1:"",
  veneer2:"",
  shapeWidth:"",
  veneerL:"",
  veneerR:"",
}};

for(let i = 0; i<numerRow; i++){
newRows.push(pureStateElement(i + 1))
}

  setState({
    ...state, data:[...newRows],
    nextID: newRows.length, 
  })
}


// const addNewRow = (numerRow) => {
//   const newRows = [...state.data];

// const pureStateElement = (num) => {
//   return {
//   id: num + state.data.length,
//   shapeName:"",
//   shapeLength:"",
//   veneer1:"",
//   veneer2:"",
//   shapeWidth:"",
//   veneerL:"",
//   veneerR:"",
// }};

// for(let i = 0; i<numerRow; i++){
// newRows.push(pureStateElement(i + 1))
// }

//   setState({
//     ...state, data:[...newRows]
//   })
// }

const handleRemoveRow = (id) => {
  setState({
    ...state, data:state.data.filter((item) => (item.id !== id))
  })
}


  return(
    <>
      <MainInfo handleMainInfo={ handleMainInfo } info={state}/>
      <Table handleInputChange={ handleInputChange } data={ state.data } removeRow={ handleRemoveRow }/>
      <div className="row">
        <div className="col s12">
          <Buttons title={"Dodaj 1"} name={"add1"} quantity={1} addNewRow={addNewRow}/>
          <Buttons title={"Dodaj 10"} name={"add10"} quantity={10} addNewRow={addNewRow}/>
        </div>
      </div>
    </>
  )
}

export default App;
