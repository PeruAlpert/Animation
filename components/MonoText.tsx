import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import {colors} from '../constants/Colors';

const MonoText = (props: any) => {
  const size = props.size;
  return (
    <Text
      {...props}
      style={[
        {
          color: props.color || colors.primary,
          marginTop: props.top,
          marginHorizontal: props.mh,
          lineHeight: props.lineHeight,
          fontSize: size,
          fontWeight: props.bold ? 'bold' : 'normal',
        },
        props.style,
      ]}
    />
  );
};

export default MonoText;

const styles = StyleSheet.create({});
