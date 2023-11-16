import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";

function calculateCenterPoint(coordinates) {
    const numCoordinates = coordinates.length;
    let sumLat = 0;
    let sumLng = 0;

    for (const [lng, lat] of coordinates) {
        sumLat += lat;
        sumLng += lng;
    }

    const centerLat = sumLat / numCoordinates;
    const centerLng = sumLng / numCoordinates;

    return [centerLng, centerLat];
}

const coordinates = [
    [2.18455661967592, 41.4069427924939],
    [2.18575907148484, 41.4078265843887],
    [2.18688582723268, 41.4086782487864],
    [2.18692144580669, 41.4127467539116],
    [2.18692703650464, 41.4137309861099],
    [2.18693147902861, 41.4150509965025],
    [2.18692784327006, 41.4153185533153],
    [2.18338621756958, 41.4179811214441],
    [2.18050972068785, 41.4158624707279],
    [2.17549317172577, 41.4120671356868],
    [2.17890518655161, 41.4094802747297],
    [2.18114163350041, 41.4077871856492],
    [2.18227746532831, 41.4069244823097],
    [2.18340796348655, 41.4060697012631],
    [2.18455661967592, 41.4069427924939],
];

const centerPoint = calculateCenterPoint(coordinates);
const centerPointReverse = centerPoint.reverse();

function Neighbour() {
    const lesCortsGeoJSON = {
        type: "Feature",
        properties: {
            codi_districte: 10,
            nom_districte: "Sant Martí",
            Codi_Barri: 64,
            Nom_Barri: "el Camp de l'Arpa del Clot",
        },
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [2.18455661967592, 41.4069427924939],
                    [2.18575907148484, 41.4078265843887],
                    [2.18688582723268, 41.4086782487864],
                    [2.18692144580669, 41.4127467539116],
                    [2.18692703650464, 41.4137309861099],
                    [2.18693147902861, 41.4150509965025],
                    [2.18692784327006, 41.4153185533153],
                    [2.18338621756958, 41.4179811214441],
                    [2.18050972068785, 41.4158624707279],
                    [2.17549317172577, 41.4120671356868],
                    [2.17890518655161, 41.4094802747297],
                    [2.18114163350041, 41.4077871856492],
                    [2.18227746532831, 41.4069244823097],
                    [2.18340796348655, 41.4060697012631],
                    [2.18455661967592, 41.4069427924939],
                ],
            ],
        },
    };

    return (
        <MapContainer
            center={centerPointReverse}
            zoom={20}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={centerPointReverse}>
                <Popup><div><p>Preu</p><p>Nom</p></div></Popup>
            </Marker>
            <GeoJSON
                data={lesCortsGeoJSON}
                style={() => ({
                    fillColor: "blue",
                    color: "red",
                    weight: 2,
                    opacity: 0.5,
                })}
            />
        </MapContainer>
    );
}

export default Neighbour;
