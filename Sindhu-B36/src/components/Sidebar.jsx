import React, { useState } from 'react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react';

export const Sidebar = ({ filterData }) => {
    const [checkedItems, setCheckedItems] = useState({}); // State to store checked checkboxes

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });

        // Call filterData function from Chairs component with updated checkbox state
        filterData({ ...checkedItems, [name]: checked });
    };

    return (
        <div style={{
            position: "fixed",
            top: "50px",
            left: 0,
            height: "100vh",
            width: "300px",
            background: "#f0f0f0",
            padding: "20px",
            boxSizing: "border-box",
            zIndex: 3,
            backgroundColor:"#dfa66d"
        }}>
            <h2 style={{ marginBottom: "20px" ,}}>Chairs</h2>
            <div style={{ marginBottom: "20px" }}>
                <h3>Category</h3>
                <div>
                    <input type="checkbox" id="officeChairs" name="officeChairs" onChange={handleCheckboxChange} />
                    <label htmlFor="officeChairs">Office Chairs</label>
                </div>
                <div>
                    <input type="checkbox" id="diningChairs" name="diningChairs" onChange={handleCheckboxChange} />
                    <label htmlFor="diningChairs">Dining Chairs</label>
                </div>
                <div>
                    <input type="checkbox" id="livingChairs" name="livingChairs" onChange={handleCheckboxChange} />
                    <label htmlFor="livingChairs">Living Chairs</label>
                </div>
            </div>
            <div>
            <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
<h2>Price Range</h2>
</div>
        </div>
    );
};
