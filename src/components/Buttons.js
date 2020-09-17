import React from 'react';

const Buttons = ({title, name, quantity, addNewRow}) => {

    return(
        <button className="btn waves-effect waves-light col s4 offset-s1" type="submit" name={name} onClick={()=>addNewRow(quantity)}>{title}
            <i className="material-icons right"></i>
        </button>
    )
}

export default Buttons;