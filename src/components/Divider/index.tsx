import React from 'react';
import {
  View as RNView,
  ViewStyle,
  DimensionValue
} from 'react-native';
import { styles } from './styles';

interface DividerProps extends ViewStyle {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: string;
  length?: DimensionValue;
  style?: ViewStyle;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  color = '#E0E0E0',
  length = '100%',
  style,
  ...rest
}) => {
  
  const dividerStyle: ViewStyle =
    orientation === 'horizontal'
      ? { width: length, height: thickness, backgroundColor: color }
      : { width: thickness, height: length, backgroundColor: color };


  return (
    <RNView
      style={[
        styles.divider,
        dividerStyle,
        style,
        {...rest},
      ]}
    />
  );
};

export default Divider;

