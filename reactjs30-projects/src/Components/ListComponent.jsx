import React from 'react';

const ListComponent = () => {
  // Define a list of items
  const items = ['32104', 'Mounika', 'Software Developer'];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>List of Items</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
