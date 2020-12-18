import React, {useEffect} from 'react'
import './branchStyle.css'
// import { ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";

// const geoUrl ="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

//   const markers = [
//     {markerOffset: 10,name: "Mumbai",coordinates: [72.8777,19.0760]},//longitude,latitude
//     {markerOffset: 10,name: "Agra",coordinates: [78.0081,27.1767]},
//     {markerOffset:-5,name: "Delhi",coordinates: [77.1025,28.7041]},
//   ];


const Branches = () => {
    useEffect(() => {
        window.scrollTo(0, 200)
      }, [])
      
    return (
    
            <div className="card">
                {/* <ComposableMap
                 projectionConfig={{
                   scale: 170
                 }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                    }
                </Geographies>
                {markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                    <g
                        fill="#FF5533"
                        stroke="#FF5533"
                        strokeWidth="0.5"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                    >
                        <circle cx="3" cy="0" r="3" />
                    </g>

                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        className="text"
                    >
                        {name}
                    </text>
                    </Marker>
                ))}
                </ComposableMap> */}
            </div>            
        
    )
}

export default Branches
