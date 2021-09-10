import React from 'react';
import { Button } from '@material-ui/core';
import './SearchPage.css';
import SearchResult from './SearchResult';

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
                 img="https://image.shutterstock.com/image-photo/small-clapboard-siding-house-view-260nw-182798594.jpg" location="Private room in center of london" title="stay at this spacious Edwardian House" description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Washing Machine" star={4.73} price="$30 / night" total="$117 total"
             />

            <SearchResult
                 img="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=" location="Private room in center of london" title="independent luxury studio apartment" description="2 guest - 3 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen" star={4.3} price="$48 / night" total="$157 total"
             />

            <SearchResult
                 img="https://i.pinimg.com/originals/66/d9/f5/66d9f5afdc5337d3f9eac362b970c426.jpg" location="Private room in center of london" title="London studio Apartment" description="4 guest - 4 bedroom - 4 bed - 2 bathrooms - free parking - Washing Machine" star={3.8} price="$35 / night" total="$287 total"
             />

            <SearchResult
                 img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg" location="Private room in center of london" title="30 mins to oxford Street, Excel London" description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Washing Machine" star={4.1} price="$55 / night" total="$320 total"
             />

            <SearchResult
                 img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg" location="Private room in center of london" title="Spacious Peaceful Modern Bedroom" description="3 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Dry Cleaning" star={5.0} price="$68 / night" total="$450 total"
             />

            <SearchResult
                 img="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" location="Private room in center of london" title="The blue room in London" description="2 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Washing Machine" star={4.23} price="$65 / night" total="$480 total"
             />

            <SearchResult
                 img="https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA=" location="Private room in center of london" title="5 Star Luxury Apartment" description="3 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - free parking - Washing Machine" star={3.85} price="$98 / night" total="$650 total"
             />
        </div>
    )
}

export default SearchPage
