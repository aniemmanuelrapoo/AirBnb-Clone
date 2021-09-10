import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css";//main style file
import "react-date-range/dist/theme/default.css"; // theme style file
import{ DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from "react-router-dom"

// DATE PICKER COMPONENT
// things installed npm i react-date-range/ matrial ui/ npm i date-fns
function Search() {
    // history is used to redirect to another page
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    //date picker selection !important
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    //when you set a date, set the start date to where ever range you slected and set the end date to where ever range you slected
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            {/* date range picker itself */}
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests
                <PeopleIcon />
            </h2>
            <input min={0}
            defaultValue={2} type="number" />
            <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
        </div>
    )
}

export default Search
