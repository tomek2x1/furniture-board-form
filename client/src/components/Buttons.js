import React from 'react';

const Buttons = ({title, name, width, offset, quantity, func}) => {

    return(
        <button className={`btn waves-effect waves-light col ${width} ${offset}`} type="submit" name={name} onClick={()=>func(quantity)}>{title}</button>
    )
}

export default Buttons;