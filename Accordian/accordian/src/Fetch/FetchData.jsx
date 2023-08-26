import React, { useEffect, useState } from 'react';

const FetchData =() => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [filtered,setFiltered]=useState([])

  const useDebounce=(value,delay)=>{
    const [text,setText]=useState(value);
    useEffect(()=>{
      let id=setTimeout(()=>{
       setText(value)
      },delay)
      return ()=>{
       clearTimeout(id)
     }
    },[value,delay])
    return text;
 }
  const debouncedValue=useDebounce(text,3000)

  useEffect(()=>{
    fetchUsers();
  },[])

  useEffect(() => {
    if(debouncedValue){
      filterData(debouncedValue)
    }
  }, [debouncedValue]);

  function filterData() {
    let filteredData = data.filter((el) =>
      el.name.toLowerCase().includes(debouncedValue.toLowerCase())
    );
    console.log('Filtered',filteredData)
    setFiltered(filteredData);
  }

  const fetchUsers = async () => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let data = await response.json();
      setData(data);
      setFiltered(data)
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
        {filtered?.map((el) => (
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
