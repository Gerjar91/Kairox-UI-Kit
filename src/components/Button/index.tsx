import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';

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
  paddingVertical?: number;
  leftIcon?: React.ReactElement;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'solid',
  disabled = false,
  style,
  textStyle,
  children,
  activeOpacity = 0.8,
  paddingVertical = 12,
  leftIcon,
  ...rest
}) => {
  const renderContent = () => {
    if (children) {
      return children;
    }
    return (
      <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>
        {title}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={[
        { paddingVertical },
        styles.base,
        styles[variant],
        disabled && styles.disabled,
        style,
        { ...rest },
      ]}
    >
      {leftIcon}
      {renderContent()}
    </TouchableOpacity>
  );
};

export default Button;
