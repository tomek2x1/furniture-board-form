import React from 'react';

const MainInfo = ({orderName, boardType, handleMainInfo}) => {

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
                <input type="text" id="boardType" name="boardType" value={ boardType } onChange={ e => { handleMainInfo(e) } } />
                <label className="active" htmlFor="boardType">Płyta</label>
            </div>
        </div>
    </div>
  )
}

export default MainInfo;