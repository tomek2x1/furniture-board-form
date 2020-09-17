import React from 'react'

const TableRow = ({ handleInputChange, file}) => {

    return(
        <tr>
            <td>
                <p>{ file.id }</p>
            </td>
            <td>
                <input type="text" name="shapeName" value={ file.shapeName } onChange={(e) => {handleInputChange(e, file.id)}} />
            </td>
            <td>
                <input type="text" name="shapeLength" value={ file.shapeLength } onChange={(e) => {handleInputChange(e, file.id)}} />
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
                <input type="text" name="shapeWidth" value={ file.shapeWidth } onChange={(e) => {handleInputChange(e, file.id)}} />
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
                <button className="btn red">Usuń</button>
            </td>
        </tr>
    )
}

export default TableRow;