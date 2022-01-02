import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div style={{ color: "red" }}>{text}</div>;

class Map extends Component<any> {
  static defaultProps = {
    center: {
      lat: 45.805767,
      lng: 16.029684,
    },
    zoom: 13,
    mapTypeId: "terrain",
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLEMAP_KEY! }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={45.805767} lng={16.029684} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
