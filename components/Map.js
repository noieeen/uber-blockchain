import React,{useEffect} from 'react'

import mapboxgl from 'mapbox-gl'

const style = {
    wrapper:`flex-1 h-full w-full`,

}

// mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
const token2 = process.env.MAPBOX_ACCESS_TOKEN2

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN2
//mapboxgl.accessToken = 'pk.eyJ1Ijoibm5ubm5udCIsImEiOiJjbDBpZzVxeWgwMGk0M2Nwd3J2aGtnczNtIn0.Etizai_i2jE4zdOccqrsXg';

// mapboxgl.accessToken = 'pk.eyJ1Ijoibm5ubm5udCIsImEiOiJjbDBpaDN3aWEwMnJyM2RwNjEzYTllMzUxIn0.uYqkG8QtAgbIhcuBKlfhpA'

console.log("key="+mapboxgl.accessToken);

console.log("key="+token);
console.log("key2="+token2);

const Map = () => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
            container:'map',
            //style:'mapbox://styles/v1/nnnnnnt/cjikt35x83t1z2rnxpdmjs7y7',
            style: 'mapbox://styles/mapbox/streets-v11',
            center:[-99.29011,39.39172],
            zoom:3,
        })
    },[])

  return (
    <div className={style.wrapper} id='map'></div>

  )
}

export default Map