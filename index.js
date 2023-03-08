const PrintoutPanel = () => {
  return <div id="printoutPanel" key="printoutPanelKey" style={{height: "100vh"}}/>;
};

const MyMap = () => {
  return (
    <div
      id="myMap"
      key="myMapKey"
      style={{ width: "100%", height: "100vh" }}
    />
  );
};

const BingMapsContainer = () => {
  return (
    <div id="container" style={{display: "flex", flexWrap: "nowrap"}}>
      <PrintoutPanel />
      <MyMap />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BingMapsContainer />);

function loadMapScenario() {
  var map = new Microsoft.Maps.Map(document.getElementById("myMap"), {
    /* No need to set credentials if already passed in URL */
    center: new Microsoft.Maps.Location(40.418386, -80.019262),
    zoom: 16,
  });
  Microsoft.Maps.loadModule("Microsoft.Maps.Directions", function () {
    var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(
      map
    );
    directionsManager.setRenderOptions({
      itineraryContainer: document.getElementById("printoutPanel"),
    });
    directionsManager.setRequestOptions({
      routeMode: Microsoft.Maps.Directions.RouteMode.truck,
      vehicleSpec: {
        dimensionUnit: "ft",
        weightUnit: "lb",
        vehicleHeight: 5,
        vehicleWidth: 3.5,
        vehicleLength: 30,
        vehicleWeight: 30000,
        vehicleAxles: 3,
        vehicleTrailers: 2,
        vehicleSemi: true,
        vehicleMaxGradient: 10,
        vehicleMinTurnRadius: 15,
        vehicleAvoidCrossWind: true,
        vehicleAvoidGroundingRisk: true,
        vehicleHazardousMaterials: "F",
        vehicleHazardousPermits: "F",
      },
    });
    var wp1 = new Microsoft.Maps.Directions.Waypoint({
      address: "590 Crane Ave, Pittsburgh, PA",
      location: new Microsoft.Maps.Location(40.419228, -80.018138),
    });
    var wp2 = new Microsoft.Maps.Directions.Waypoint({
      address: "600 Forbes Ave, Pittsburgh, PA",
      location: new Microsoft.Maps.Location(40.43755, -79.99361),
    });
    directionsManager.addWaypoint(wp1);
    directionsManager.addWaypoint(wp2);
    directionsManager.calculateDirections();
  });
}
