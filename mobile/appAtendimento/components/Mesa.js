import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB,Button} from 'react-native-paper';

const Mesa = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 600 ,
  },
})

export default Mesa;