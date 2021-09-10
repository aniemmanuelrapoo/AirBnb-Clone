import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className="home__section">
                <Card
                src="https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" title="Online Exprinces"description="unique activites we can do together, led by a world of host." 
                />
                <Card
                src="https://a0.muscache.com/pictures/miso/Hosting-42022004/original/96fc0724-4fd6-4eae-993d-6a4e25609f49.jpeg" title="Unique stays" description="Spaces that are more than just a place to sleep"
                />
                <Card
                src="https://www.ventura.mb.ca/home/wp-content/uploads/2020/05/Burnaby-A-20-Front-Elevation-Right-scaled-e1590616029223-1024x623.jpg" title="Entire homes" description="Comfortable private places, with room for friends or family" 
                />
            </div>
            <div className="home__section">
            <Card
                src="https://apollo-singapore.akamaized.net/v1/files/278crflc847s3-IN/image" title="3 bedroom flat in Dallas"description="unique activites we can do together, led by a world of host." price="$130/night"
                />
                <Card
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" title="Penthouse in London" description="Spaces that are more than just a place to sleep" price="$350/night"
                />
                <Card
                src="https://apollo-singapore.akamaized.net/v1/files/278crflc847s3-IN/image" title="1 Bedroom apartment" description="Comfortable private places, with room for friends or family" price="$70/night"
                />
            </div>
        </div>
    )
}

export default Home
