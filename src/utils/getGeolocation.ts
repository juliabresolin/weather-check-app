import { useState, useEffect } from "react";

interface positionProps {
  latitude: number;
  longitude: number;
}

function getGeolocation() {
  const [position, setPosition] = useState<positionProps>();

  useEffect(() => {
    getCordinates();
  }, []);


  function getCordinates() {
    navigator.geolocation.getCurrentPosition(
      currentPosition => {
        // console.log(currentPosition)
        setPosition({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude
        });
      }
    )
  }

  return position;

}

export default getGeolocation;



