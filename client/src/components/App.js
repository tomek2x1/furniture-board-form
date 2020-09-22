import React, { useState, useEffect } from "react";
import M from "materialize-css";
import MainInfo from './MainInfo';
import Table from './Table';
import Buttons from './Buttons';


const App = () => {

  const [state, setState] = useState({
    orderName:"",
    boardType: "",
    data:[],
    nextID:0,
  });

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    addNewRow(1);
  }, []);


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
  return {
  id: state.nextID + num,
  shapeName:"",
  shapeLength:"",
  veneer1:"NIE",
  veneer2:"NIE",
  shapeWidth:"",
  veneerL:"NIE",
  veneerP:"NIE",
}};

for(let i = 0; i<numerRow; i++){
newRows.push(pureStateElement(i + 1))
}

  setState({
    ...state, data:[...newRows],
    nextID: newRows.length, 
  })
}


const handleRemoveRow = (id) => {
  setState({
    ...state, data:state.data.filter((item) => (item.id !== id))
  })
}

const handleSubmit = () => {
  // Sprawdzenie czy wszystkie pola Szerokości i Wysokości są wypełnione
  const checkData = state.data.filter(data => data.shapeLength =="" && data.shapeWidth =="")

  if(checkData.length){
    console.log("Wypełnij pola wymagane")
  } else {
    console.log("Wysłano formularz")
    
    // Wysyłanie formularza


fetch("http://localhost:3002/", {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(state)
})
  .then(res => res.json())
  .then(res => {
      setState({
        ...state, nextID: 0, orderName: "", boardType: "", data: [{
          id: 0,
          shapeName: "",
          shapeLength: "",
          veneer1: "NIE",
          veneer2: "NIE",
          shapeWidth: "",
          veneerL: "NIE",
          veneerP: "NIE",
        }],
      });
    })

}
}

  return(
    <>
      <MainInfo handleMainInfo={ handleMainInfo } info={state}/>
      <Table handleInputChange={ handleInputChange } data={ state.data } removeRow={ handleRemoveRow }/>
      <div className="row">
        <div className="col s12">
          <Buttons title={"Dodaj 1"} name={"add1"} width={"s4"} offset={"offset-s1"} quantity={1} func={addNewRow}/>
          <Buttons title={"Dodaj 10"} name={"add10"} width={"s4"} offset={"offset-s1"} quantity={10} func={addNewRow}/>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <Buttons title={"Wyślij formatki"} width={"s9"} offset={"offset-s1"} name={"submit"} func={handleSubmit}/>
        </div>
      </div>
    </>
  )
}

export default App;
