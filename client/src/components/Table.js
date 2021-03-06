import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ handleInputChange, data, removeRow }) => {

    const add10Rows = data.map((file, index) => {
        return (
            <TableRow key={ file.id } position={index + 1} data={data} file={ file } handleInputChange={ handleInputChange } removeRow={ removeRow }/>
        );
      });

    return(
        <table>
            <thead>
                <TableHeader />
                </thead>
                <tbody>
                {add10Rows}
            </tbody>
        </table>
    )
}

export default Table;