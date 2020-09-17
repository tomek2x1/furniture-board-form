import React from 'react';

const MainInfo = ({orderName, board, handleMainInfo}) => {

  return(
    <div>
        <div className="row">
            <div className="input-field col s6">
                <input type="text" id="orderName" name="orderName" value={ orderName } onChange={ e => { handleMainInfo(e) } } />
                <label className="active" htmlFor="orderName">Nazwa Zlecenia</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s6">
                <input type="text" id="board" name="board" value={ board } onChange={ e => { handleMainInfo(e) } } />
                <label className="active" htmlFor="board">Płyta</label>
            </div>
        </div>
    </div>
  )
}

export default MainInfo;