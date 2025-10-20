import React from 'react';
import {
  Text as RNText,
  TextStyle,
  TextProps,
  StyleProp,
} from 'react-native';
import { styles } from './styles';

interface CustomTextStyleProps extends TextStyle { }
interface CustomTextProps extends TextProps, CustomTextStyleProps {
  style?: StyleProp<TextStyle>;
}

export const Text: React.FC<CustomTextProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <RNText
      style={[
        style,
        styles.text,
        { ...rest }
      ]}

    >
      {children}
    </RNText>
  );
};

export default Text;
