import { useState } from 'react';
import './App.css';
import Dropdown from './Dropdown';

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countryList = [
    {label: "Please choose an item", value: "DEFAULT"},
    {label: "France", value: "Fr"},
    {label: "India", value: "In"}
  ]
  const handleDropdown = (e) => {
    setSelectedCountry(e.target.value);
  }

  return (
    <div className="App">
      <Dropdown dropdownLabel='Country' selected={selectedCountry} options={countryList} onChange={handleDropdown} />
    </div>
  );
}

export default App;
