import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './Map.css';
//import {popupStyle} from './Map.css'
function MapTiler({lng,lat,zoom,apiKey,radioStanice}){
    lng = Number(lng)
    lat=Number(lat)
    zoom=Number(zoom)
  
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [currentZoom, setCurrentZoom] = useState(zoom);
    maptilersdk.config.apiKey = apiKey;
  
    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once
        map.current = new maptilersdk.Map({
            container: mapContainer.current,  //ne mozemo predati hostDiv jer to nije pravi div u domu nego react element u virtualnom domu
            style: maptilersdk.MapStyle.STREETS,
            center: [lng,lat],
            zoom: currentZoom
            });
        radioStanice.forEach(rs=>{
            const popup=new maptilersdk.Popup({offset: 25})
                .setHTML(`<div class="popupStyle">${rs.name},${rs.frekvencija} </div>`)
            popup.addClassName("popupStyle")
            const marker  = new maptilersdk.Marker({color: "#FF0000"})
            marker.setLngLat([rs.lng,rs.lat])
                .setPopup(popup)
                .addTo(map.current);
        })
        }, [lng,lat,currentZoom]);
    
    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />{ /*korisit se za dohvaćanje pravog dom elementa iz virtualnog dom elemnta*/}
        </div>
    );
}
export default MapTiler;





