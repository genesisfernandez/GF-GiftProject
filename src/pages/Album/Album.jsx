import React from "react";
import albumData from "./AlbumData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Data from "./Data";
import './DataAlbum.css'

function Album() {

    function handleData(data) {
        return <Data 
                    key={data.id}
                    img={data.img}
                    content={data.content}
                />
    }

  return (

    <div className="albumSection">
       <h1><i>Memories Together </i>👩‍❤️‍💋‍👨</h1>
       <div className="carouselContainer">
        <div className="simple">
         <h2>Making <span>memories</span> <br/> with you is my <br/> <span>favorite</span> thing to do<span>.</span></h2>
        </div>
        <Carousel className="crs" width="80%" autoPlay={true} infiniteLoop={true}>
          {albumData.map(handleData)}
        </Carousel>
        </div>
    </div>
   
    
  );
}

export default Album;
