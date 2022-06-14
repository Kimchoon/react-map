import {useMemo} from 'react'
import {GoogleMapReact, GoogleMap, useLoadScript, Marker, MarkerClusterer} from '@react-google-maps/api';
import './Map.css'

let map1;
let latitude = 20.979966;

    let longitude =   105.8434191;    

const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBFNJVT-t6mvW77jaaSZyg6cJjXMb-sDts'
    });
    if (!isLoaded) return <div> Loading...</div>;

    
    
    //navigator.geolocation.getCurrentPosition để lấy vị trí hiện tại của thiết bị trả về 2 giá trị là latitude và longtitude
    //
    navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log('position = ', latitude, longitude);
    });

    // khai báo map1
    return <Map1/>;
}



function Map1(){    
    console.log('return position = ', latitude, longitude);

    return(
        <GoogleMap
            zoom={15}n
            center={{ lat: latitude, lng: longitude }}
            mapContainerClassName="map-container">
            <Marker
              position={{ lat: 20.979966, lng:  105.8434191 }}
            />
        </GoogleMap>
    )
}

export default Map