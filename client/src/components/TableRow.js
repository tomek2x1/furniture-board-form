import React from 'react'

const TableRow = ({ handleInputChange, file, removeRow, position}) => {

    return(
        <tr>
            <td>
                <p>{ position }</p>
            </td>
            <td>
                <input type="text" name="shapeName" value={ file.shapeName } onChange={(e) => {handleInputChange(e, file.id)}} />
            </td>
            <td>
                <input type="number" name="shapeLength" value={ file.shapeLength } style={ !file.shapeLength ? {border:'1px solid rgba(241, 130, 141,1)'} : null } onChange={(e) => {handleInputChange(e, file.id)}} />
            </td>
            <td>
                <div className="input-field col s12">
                    <select name="veneer1" value={ file.veneer1 } onChange={(e) => {handleInputChange(e, file.id)}}>
                        <option value="Nie">Nie</option>
                        <option value="Tak">Tak</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="input-field col s12">
                    <select name="veneer2" value={ file.veneer2 } onChange={(e) => {handleInputChange(e, file.id)}}>
                        <option value="Nie">Nie</option>
                        <option value="Tak">Tak</option>
                    </select>
                </div>
            </td>
            <td>
                <input type="number" name="shapeWidth" value={ file.shapeWidth } style={ !file.shapeWidth ? {border:'1px solid rgba(241, 130, 141,1)'} : null } onChange={(e) => {handleInputChange(e, file.id)}} />
            </td>
            <td>
                <div className="input-field col s12">
                    <select name="veneerL" value={ file.veneerL } onChange={(e) => {handleInputChange(e, file.id)}}>
                        <option value="Nie">Nie</option>
                        <option value="Tak">Tak</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="input-field col s12">
                    <select name="veneerP" value={ file.veneerP } onChange={(e) => {handleInputChange(e, file.id)}}>
                        <option value="Nie">Nie</option>
                        <option value="Tak">Tak</option>
                    </select>
                </div>
            </td>
            <td>
                <button className="btn red" onClick={()=> removeRow(file.id)}>Usuń</button>
            </td>
        </tr>
    )
}

export default TableRow;