import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet, { LatLngExpression } from "leaflet";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import { WeatherInfo } from "types";

import "leaflet/dist/leaflet.css";

const MapWrapper = styled(Box)({
  width: "100%",
  height: 300,
});

const mapStyles = {
  width: "100%",
  height: "100%",
};

// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const URL = process.env.REACT_APP_LEAFLET_API_URL || "";

type WeatherMapProps = {
  data: Partial<WeatherInfo>;
};

const WeatherMap = ({
  data: { name, sys, coord, weather },
}: WeatherMapProps) => {
  const currentPosition: LatLngExpression = {
    lat: coord?.lat!,
    lng: coord?.lon!,
  };

  const description = weather && weather[0]?.description;

  return (
    <MapWrapper>
      <MapContainer style={mapStyles} center={currentPosition} zoom={11}>
        <TileLayer url={URL} />
        <Marker position={currentPosition}>
          <Popup>
            <Typography variant="body1">
              {name}, {sys?.country}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default WeatherMap;
