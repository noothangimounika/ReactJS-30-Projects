import React, { useState } from 'react'
import DataJson from './DataJson.json'
import './Pagination.css'


const Pagination = () => {
    const [currentPage,setCurrentPage]=useState(1);
    const recordsPerPge=5;
    const lastIndex=currentPage * recordsPerPge;
    const firstIndex=lastIndex-recordsPerPge;
    const records=DataJson.slice(firstIndex,lastIndex);
    const npage=Math.ceil(DataJson.length/recordsPerPge);
    const numbers=[...Array(npage +1).keys()].slice(1);
  return (
    <div>
        <table className='Table-container'>  
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>STATE</th>
            </thead>
            <tbody>
                {DataJson.map((d,i)=>(

                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.state}</td>
                    </tr>
                

                ))}
            </tbody>
        </table>
        <nav>
            <ul className='pagination-nav'> 
                <li className='page-item'> 
                    <a href="#" className='page-link' onClick={prePage}>Prev</a>
                </li>
                {
                    numbers.map((n,i)=>(
                        <li className='page-item' key={i}>  
                            <a href="#" className='page-item' onClick={changeCPage}>{n}</a>
                        </li>
                    
                    ))
                    
                }
            </ul>
        </nav>
    </div>
  )
}

export default Pagination