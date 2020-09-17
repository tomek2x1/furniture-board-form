import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';


const Table = ({ handleInputChange, data }) => {

    const add10Rows = data.map(file => {
        return (
            <TableRow key={ file.id } file={ file } handleInputChange={ handleInputChange }/>
        );
      });

    return(
        <table>
                  <thead>
            <TableHeader />
            </thead>
            <tbody>
            {/* <TableRow  data={ data }/> */}
            {add10Rows}
            </tbody>
        </table>
    )
}

export default Table;