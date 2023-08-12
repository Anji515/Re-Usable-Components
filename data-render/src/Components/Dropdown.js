import './Dropdown.css'
import React, { useEffect, useState } from 'react';
import Echart from './Echarts';

const SearchDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  console.log('selectedOptions',selectedOptions);

  let [data,setData]=useState([])
  console.log('prices',data)
  
  
  useEffect(()=>{
    const getData=async()=>{
        let resp=await fetch(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365&interval=daily`)
        let data=await resp.json()
        setData(data.prices)
    }
    getData()
  },[])


  const toggleDropdown = () => {
    setIsOpen(true);
  };

  const handleOptionSelect = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
      setSearchTerm('');
      setIsOpen(false);
    }
  };

  const handleOptionRemove = (optionToRemove) => {
    const updatedOptions = selectedOptions.filter(
      (selectedOption) => selectedOption !== optionToRemove
    );
    setSelectedOptions(updatedOptions);
  };

  return (
    <div>

    <div className="search-dropdown">
      <div className="input-container">
        {selectedOptions.map((option) => (
          <div key={option} className="selected-option">
            {option}
            <span className="remove-option" onClick={() => handleOptionRemove(option)}>
              &#x2716;
            </span>
          </div>
        ))}
        <input
          type="text"
          placeholder="Search..."
          onClick={toggleDropdown}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {isOpen && (
        <div className="dropdown">
          {options
            .filter((option) =>
              option.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((option) => (
              <div
                key={option}
                className="dropdown-item"
                onClick={() => handleOptionSelect(option)}
                >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>

    <Echart data={data}/>

    </div>
  );
};

export default SearchDropdown;
