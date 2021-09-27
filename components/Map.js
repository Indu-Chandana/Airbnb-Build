import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'; //pin and map
import { getCenter } from 'geolib'; //this use for center the locations
function Map({ searchResults }) {
    const[selectedLocation, setSelectedLocation] = useState({}); //this is for when I click the pin get popup
    // Transform the search results object into the
    // { latitude: 52.516272, longitude: 13.377722 }, object

    const coordinates = searchResults.map(result => ({     //this is direct return - map can return the value - foreach can not return a value
        longitude: result.long,
        latitude: result.lat,
    }))

    // The latitude and longitude of the center of location coordinates
    const center =  getCenter(coordinates);
    // console.log(center);

    
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude, //we center the we want position
        longitude: center.longitude,
        zoom: 11,
    });


    return (<ReactMapGL
    mapStyle='mapbox://styles/icymint/ckty2o2op0m4m17rzqs4p9i3x' //style the map airbnb color
    // this time we use public key we can use in .env and upload, only we use secrute key we tell to vercel what the key.
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}// we can map zoom and go another countries
    >
        {searchResults.map(result => (
            <div key={result.long}>
                <Marker
                longitude={result.long} //what position pin on
                latitude={result.lat} //what position pin on
                offsetLeft={-20}
                offsetTop={-10}
                >
                    <p
                     role="img" //best practices  p tag representing a img
                     onClick={() => setSelectedLocation(result) }
                     className="cursor-pointer text-2xl animate-bounce"
                     aria-label="push-pin" //best practices
                     >📌</p>
                </Marker>

                {/* The popup that should show if we click on a Marker */}
                {selectedLocation.long === result.long ? (
                        <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        latitude={result.lat}
                        longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                     ):(
                         false
                     )}
            </div>
        ))}
    </ReactMapGL>
    )
}

export default Map
