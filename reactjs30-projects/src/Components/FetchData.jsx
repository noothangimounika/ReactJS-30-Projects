// import React, { useEffect, useState } from 'react'

// const FetchData = () => {
//     const [records,setRecords]=useState([]);

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts');
//         .then(response => response.json())
//         .then(data => setRecords({data}))
//         .catch(err =>console.log(err))
//     }, []);

//   return (
//     <div className='FetchData-Container'>
//         <ul>
//             {records.map((list, index) => (
//                 <li key={index}>{list.id} | {list.name}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default FetchData





import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setRecords(data))  
            .catch(err => console.log(err));
    }, []); 

    return (
        <div className='FetchData-Container'>
            <ul>
                {records.map((list, index) => (
                    <li key={index}>{list.id} | {list.title}</li>  
                ))}
            </ul>
        </div>
    );
};

export default FetchData;
