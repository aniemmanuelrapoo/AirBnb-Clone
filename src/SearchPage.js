import React from 'react';
import { Button } from '@material-ui/core';
import './SearchPage.css';
import SearchResult from './SearchResult';
import img1 from './assets/small-clapboard-siding-house-view-260nw-182798594.webp'
import img2 from './assets/istockphoto-1026205392-612x612.jpg'
import img3 from './assets/66d9f5afdc5337d3f9eac362b970c426.jpg'
import img4 from './assets/brewster-mcleod-architects-1486154143.jpg'
import img5 from './assets/suburban-house-royalty-free-image-1584972559 (1).jpg'
import img6 from './assets/pexels-photo-106399.jpeg'
import img7 from './assets/istockphoto-1128971667-612x612.jpg'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays - 26 August to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult
                 img={img1} location="Private room in center of london" title="stay at this spacious Edwardian House" description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Washing Machine" star={4.73} price="$30 / night" total="$117 total"
             />

            <SearchResult
                 img={img2} location="Private room in center of london" title="independent luxury studio apartment" description="2 guest - 3 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen" star={4.3} price="$48 / night" total="$157 total"
             />

            <SearchResult
                 img={img3} location="Private room in center of london" title="London studio Apartment" description="4 guest - 4 bedroom - 4 bed - 2 bathrooms - free parking - Washing Machine" star={3.8} price="$35 / night" total="$287 total"
             />

            <SearchResult
                 img={img4} location="Private room in center of london" title="30 mins to oxford Street, Excel London" description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Washing Machine" star={4.1} price="$55 / night" total="$320 total"
             />

            <SearchResult
                 img={img5} location="Private room in center of london" title="Spacious Peaceful Modern Bedroom" description="3 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Dry Cleaning" star={5.0} price="$68 / night" total="$450 total"
             />

            <SearchResult
                 img={img6} location="Private room in center of london" title="The blue room in London" description="2 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Washing Machine" star={4.23} price="$65 / night" total="$480 total"
             />

            <SearchResult
                 img={img7} location="Private room in center of london" title="5 Star Luxury Apartment" description="3 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Washing Machine" star={3.85} price="$98 / night" total="$650 total"
             />
        </div>
    )
}

export default SearchPage
