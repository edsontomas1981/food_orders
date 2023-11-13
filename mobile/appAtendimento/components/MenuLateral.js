// MenuLateral.js
import * as React from 'react';
import { Drawer } from 'react-native-paper';

const MenuLateral = ({ onDrawerItemPress }) => {
  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        onPress={() => onDrawerItemPress('first')}
      />
      <Drawer.Item
        label="Second Item"
        onPress={() => onDrawerItemPress('second')}
      />
    </Drawer.Section>
  );
};

export default MenuLateral;
