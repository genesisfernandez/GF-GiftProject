import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Pictures from "./Pictures";
import albumData from './AlbumData'
import styles from './Album.module.css'

function Album() {

    
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
    function data(albumdata) {
       return <Pictures 
                key={albumdata.id}
                img={albumdata.img}
                content={albumdata.content}
                />
    }

  return (
    <div className={styles.container}>
        <h1><i>Memories Together</i></h1>
        <Carousel responsive={responsive}>
            {albumData.map(data)}
        </Carousel>
    </div>
    
  );
}

export default Album;
