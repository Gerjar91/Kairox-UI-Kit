import React, { useMemo } from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { variants } from '../../theme/Button';
import Text from '../Text';

type ButtonVariant = 'solid' | 'outline' | 'link';

interface ButtonProps extends TouchableOpacityProps, ViewStyle {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
  activeOpacity?: number;
  leftIcon?: React.ReactElement;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant,
  disabled = false,
  style,
  textStyle,
  children,
  activeOpacity = 0.8,
  leftIcon,
  ...rest
}) => {
  const theme = useTheme();

  const buttonStyle = useMemo<ViewStyle>(() => {
    if (!theme?.components?.Button) {
      return {};
    }
    const buttonConfig = theme.components.Button;
    const selectedVariant = variant || buttonConfig.defaultProps.variant;
    return {
      ...buttonConfig.baseStyle,
      ...buttonConfig.variants[selectedVariant].button,
      ...(disabled ? buttonConfig.disabledStyle : {}),
      ...rest,
    };
  }, [variant, disabled, theme, rest]);

  const textStyleComputed = useMemo<TextStyle>(() => {
    if (!theme?.components?.Button) {
      return {};
    }
    const buttonConfig = theme.components.Button;
    const selectedVariant = variant || buttonConfig.defaultProps.variant;
    return {
      ...buttonConfig.baseTextStyle,
      ...buttonConfig.variants[selectedVariant].text,
    };
  }, [variant, theme]);

  const renderContent = () => {
    if (children) {
      return children;
    }
    return (
      <Text style={[textStyleComputed, textStyle]}>
        {title}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={[buttonStyle, style]}
    >
      {leftIcon}
      {renderContent()}
    </TouchableOpacity>
  );
};

export default Button;
