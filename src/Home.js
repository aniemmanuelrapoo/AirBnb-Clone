import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card'
import image1 from './assets/photo-1549517045-bc93de075e53.jpeg'
import image2 from './assets/96fc0724-4fd6-4eae-993d-6a4e25609f49.jpeg'
import image3 from './assets/Burnaby-A-20-Front-Elevation-Right-scaled-e1590616029223-1024x623.jpg'
import image4 from './assets/image.webp'
import image5 from './assets/photo-1570129477492-45c003edd2be.jpeg'
import image6 from './assets/suburban-house-royalty-free-image-1584972559.jpg'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className="home__section">
                <Card
                src={image1} title="Online Exprinces"description="unique activites we can do together, led by a world of host." 
                />
                <Card
                src={image2}title="Unique stays" description="Spaces that are more than just a place to sleep"
                />
                <Card
                src={image3} title="Entire homes" description="Comfortable private places, with room for friends or family" 
                />
            </div>
            <div className="home__section">
            <Card
                src={image4} title="3 bedroom flat in Dallas"description="unique activites we can do together, led by a world of host." price="$130/night"
                />
                <Card
                src={image5} title="Penthouse in London" description="Spaces that are more than just a place to sleep" price="$350/night"
                />
                <Card
                src={image6} description="Comfortable private places, with room for friends or family" price="$70/night"
                />
            </div>
        </div>
    )
}

export default Home
