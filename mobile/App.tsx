import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.4897874,
          longitude: -46.891214,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -23.4897874,
            longitude: -46.891214,
          }}
        >
          <Callout>
            <Text>Lar das meninas</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
