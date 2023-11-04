import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

type Overlay = {
  coordinates: { latitude: number; longitude: number }[];
  strokeColor: string;
  strokeWidth: number;
};

const ipaRegion: Overlay = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0695283 },
    { latitude: 43.8537168, longitude: -79.0700046 },
    { latitude: 43.8518394, longitude: -79.0725697 },
    { latitude: 43.8481651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0695283 },
  ],
  strokeColor: "coral",
  strokeWidth: 4,
};

const stoutRegion: Overlay = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0693283 },
    { latitude: 43.8517168, longitude: -79.0710046 },
    { latitude: 43.8518394, longitude: -79.0715697 },
    { latitude: 43.8491651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0693283 },
  ],
  strokeColor: "firebrick",
  strokeWidth: 4,
};

export default function PlottingOverlays() {
  const [ipaStyles, setIpaStyles] = useState<any>([
    styles.ipaText,
    styles.boldText,
  ]);
  const [stoutStyles, setStoutStyles] = useState<any>([styles.stoutText]);
  const [overlays, setOverlays] = useState<Overlay[]>([ipaRegion]);

  function onClickIpa() {
    setIpaStyles([...ipaStyles, styles.boldText]);
    setStoutStyles([stoutStyles[0]]);
    setOverlays([ipaRegion]);
  }

  function onClickStout() {
    setStoutStyles([...stoutStyles, styles.boldText]);
    setIpaStyles([ipaStyles[0]]);
    setOverlays([stoutRegion]);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={ipaStyles} onPress={onClickIpa}>
          IPA Fans
        </Text>
        <Text style={stoutStyles} onPress={onClickStout}>
          Stout Fans
        </Text>
      </View>
      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: 43.8486744,
          longitude: -79.0695283,
          latitudeDelta: 0.002,
          longitudeDelta: 0.04,
        }}
      >
        {overlays.map((v, i) => (
          <Polygon
            key={i}
            coordinates={v.coordinates}
            strokeColor={v.strokeColor}
            strokeWidth={v.strokeWidth}
          />
        ))}
      </MapView>
    </View>
  );
}
