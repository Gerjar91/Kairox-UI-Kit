import React, { useMemo } from 'react';
import {
  Text as RNText,
  TextStyle,
  StyleProp,
} from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { variants } from '../../theme/Text';

interface CustomTextProps extends TextStyle {
  variant?: keyof typeof variants;
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  rest?: TextStyle;
}

export const Text: React.FC<CustomTextProps> = ({
  children,
  variant,
  style,
  ...rest
}) => {
  const theme = useTheme();

  const customStyle = useMemo<TextStyle>(() => {
    if (!theme?.components) {
      return {
        ...rest,
      };
    }
    const textConfig = theme?.components?.Text || {};
    const selectedVariant = variant || textConfig?.defaultProps?.variant || 'md';
    return {
      ...(textConfig?.baseStyle || {}),
      ...(textConfig?.variants[selectedVariant] || {}),
      ...rest,
    };
  }, [variant, theme, rest]);

  return (
    <RNText
      style={[
        customStyle,
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;
