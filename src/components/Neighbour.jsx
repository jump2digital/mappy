import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import Data from "../assets/data.json";

function Neighbour() {
    return (
        <div>
            <MapContainer
                center={[41.4069427924939, 2.18455661967592]}
                zoom={15}
                style={{ height: "100vh", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {Data.map((item) => (
                    <GeoJSON
                        key={item.uuid}
                        data={item.poligono}
                        style={() => ({
                            fillColor: "blue",
                            color: "red",
                            weight: 2,
                            opacity: 0.5,
                        })}
                    >
                        <Popup>{item.distrito}</Popup>
                    </GeoJSON>
                ))}
            </MapContainer>
        </div>
    );
}

export default Neighbour;
