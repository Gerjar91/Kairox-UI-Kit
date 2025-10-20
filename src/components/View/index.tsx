import React from 'react';
import {
  View as RNView,
  ViewStyle
} from 'react-native';

interface CustomViewProps extends ViewStyle {
  children?: React.ReactNode;
  style?: ViewStyle;
}

export const View: React.FC<CustomViewProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <RNView
      style={[
        style,
        {...rest}
      ]}
    >
      {children}
    </RNView>
  );
};

export default View;