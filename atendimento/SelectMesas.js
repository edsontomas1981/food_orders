import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';

const SelectComponent = ({ options, onSelect, selectedValue }) => {
  const [selectedItem, setSelectedItem] = useState(selectedValue);

  const handleValueChange = (itemValue) => {
    setSelectedItem(itemValue);
    onSelect(itemValue);
  };

  return (
    <View>
      <Picker
        selectedValue={selectedItem}
        onValueChange={handleValueChange}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
      <Text>Selected: {selectedItem}</Text>
    </View>
  );
};

export default SelectComponent;
