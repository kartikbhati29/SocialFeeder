import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { widthPixel, heightPixel } from './responsive';

export const Chip = ({ selected, title }) => {
  return (
    <View style={selected ? styles.selectedChip : styles.chip}>
      <Text
        style={{
          color: '#00A981',
          fontSize: heightPixel(14),
          lineHeight: heightPixel(15.5),
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderRadius: heightPixel(16),
    borderWidth: widthPixel(1),
    paddingHorizontal: widthPixel(12),
    paddingVertical: heightPixel(5),
    marginHorizontal: widthPixel(5),
    borderColor: '#CCEEE6',
    color: '#00A981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedChip: {
    borderRadius: widthPixel(16),
    paddingHorizontal: widthPixel(12),
    paddingVertical: heightPixel(5),
    marginHorizontal: widthPixel(5),
    backgroundColor: '#CCEEE6',
    color: '#00A981',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
