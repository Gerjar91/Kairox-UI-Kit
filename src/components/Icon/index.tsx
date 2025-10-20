import React, {
  cloneElement,
  ReactElement
} from 'react';
import {
  View,
  ViewStyle
} from 'react-native';
import { styles } from './styles';

export interface IconProps extends ViewStyle {
  as: ReactElement;
  color?: string;
  size?: number;
  style?: ViewStyle;
}

const Icon: React.FC<IconProps> = ({
  as,
  color ="#5E5E5E",
  size,
  style,
  ...rest
}) => {
  const iconProps = as.props as { color?: string; size?: number };
  
  const iconElement = cloneElement(as, {
    color: color || iconProps.color,
    size: size || iconProps.size || 24,
  } as any);

  return (
    <View
      style={[
        styles.container,
        style,
        {...rest},
      ]}
    >
      {iconElement}
    </View>
  );
};

export default Icon;

