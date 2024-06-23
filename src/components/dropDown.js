import React, { useState } from 'react'; 
function DropdownList() { 
    const [selectedValue, setSelectedValue] = useState('Year'); 
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <select value={selectedValue} onChange={handleChange}>
            <option value="Second">Second</option>
            <option value="Minute">Minute</option>
            <option value="Hour">Hour</option>
            <option value="Day">Day</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
        </select>
    );
}
export default DropdownList;