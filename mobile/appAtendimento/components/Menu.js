import * as React from 'react';
import { Drawer } from 'react-native-paper';

const Menu = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section title="Some title">
    </Drawer.Section>
  );
};

export default Menu;