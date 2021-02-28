import React, {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import { Avatar } from "@material-ui/core";
import axios from "axios";


const MapBox = () => {

    const [viewport, setViewport] = useState({
        latitude: 19.415764,
        longitude: -99.134050,
        width: "900px",
        height: "420px",
        zoom:10
    })

    const [ locations, setLocations] = React.useState([]);
    const url = `${process.env.REACT_APP_API}/rol/map`;

    const getLocations = () => {
        axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("CC_Token"),
          },
        })
        .then((response) => {
         setLocations(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
      };
      React.useEffect(() => {
        getLocations();
      }, []);

    return (
        <div>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/ianecm/cklbltgz72zzx17nw5zmbpk3t" 
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {locations.map( (ubiety, index) => (
                    <Marker key={index} 
                        latitude={ubiety.latitude}
                        longitude={ubiety.longitude}
                    >
                        <Avatar 
                            src={ubiety.photo} 
                            alt="company"
                        />
                    </Marker>
                ))}
            </ReactMapGL>
        </div>
    )
}

export default MapBox
