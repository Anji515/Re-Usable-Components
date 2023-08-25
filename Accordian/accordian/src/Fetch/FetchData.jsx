import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState(data);

  
  useEffect(() => {
    fetchUsers();
    filterData()
  }, []);

  useEffect(() => {
    const debouncedFilterData = Debouncing(filterData, 3000);
    debouncedFilterData();
  },[text]);

  function Debouncing(fun, delay) {
    let id;
    return function () {
      clearTimeout(id);
      id = setTimeout(() => {
        fun();
      }, delay);
    };
  }

  function filterData() {
    let filteredData = data.filter((el) =>
      el.name.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  }

  const fetchUsers = async () => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        style={{ width: '30%', padding: '10px', borderRadius: '16px' }}
        onChange={(e) => setText(e.target.value)}
        placeholder="search users"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
        {data?.map((el) => (
          <ul key={el.id} style={{ border: '1px solid grey', padding: '10%' }}>
            <h4>Name: {el.name}</h4>
            <p>Email: {el.email}</p>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
