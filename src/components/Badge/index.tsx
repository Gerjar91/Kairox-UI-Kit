import React from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { styles } from './styles';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  outlined?: boolean;
  showDot?: boolean;
  dotPosition?: 'left' | 'right';
  onClose?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const getVariantColors = (variant: BadgeVariant, outlined: boolean) => {
  const colors = {
    primary: {
      bg: outlined ? 'transparent' : '#6366F1',
      text: outlined ? '#6366F1' : '#FFFFFF',
      border: '#6366F1',
    },
    secondary: {
      bg: outlined ? 'transparent' : '#64748B',
      text: outlined ? '#64748B' : '#FFFFFF',
      border: '#64748B',
    },
    success: {
      bg: outlined ? 'transparent' : '#10B981',
      text: outlined ? '#10B981' : '#FFFFFF',
      border: '#10B981',
    },
    warning: {
      bg: outlined ? 'transparent' : '#F59E0B',
      text: outlined ? '#F59E0B' : '#FFFFFF',
      border: '#F59E0B',
    },
    error: {
      bg: outlined ? 'transparent' : '#EF4444',
      text: outlined ? '#EF4444' : '#FFFFFF',
      border: '#EF4444',
    },
    info: {
      bg: outlined ? 'transparent' : '#3B82F6',
      text: outlined ? '#3B82F6' : '#FFFFFF',
      border: '#3B82F6',
    },
    neutral: {
      bg: outlined ? 'transparent' : '#E5E7EB',
      text: outlined ? '#6B7280' : '#374151',
      border: '#D1D5DB',
    },
  };

  return colors[variant];
};

const getSizeStyles = (size: BadgeSize) => {
  const sizes = {
    sm: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      fontSize: 11,
      dotSize: 6,
      closeSize: 14,
    },
    md: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      fontSize: 13,
      dotSize: 8,
      closeSize: 16,
    },
    lg: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      fontSize: 15,
      dotSize: 10,
      closeSize: 18,
    },
  };

  return sizes[size];
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  outlined = false,
  showDot = false,
  dotPosition = 'left',
  onClose,
  style,
  textStyle,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  const variantColors = getVariantColors(variant, outlined);
  const sizeStyles = getSizeStyles(size);

  const containerStyle: ViewStyle = {
    backgroundColor: backgroundColor || variantColors.bg,
    borderColor: borderColor || (outlined ? variantColors.border : 'transparent'),
    borderWidth: outlined ? 1 : 0,
    borderRadius: rounded ? 999 : 6,
    paddingHorizontal: sizeStyles.paddingHorizontal,
    paddingVertical: sizeStyles.paddingVertical,
  };

  const textStyleFinal: TextStyle = {
    color: textColor || variantColors.text,
    fontSize: sizeStyles.fontSize,
  };


  return (
    <View 
    style={[
      styles.container, 
      containerStyle, 
      style]}
      >
      <Text 
      style={[
        styles.text, 
        textStyleFinal, 
        textStyle]}
        >
        {children}
      </Text>

    </View>
  );
};

export default Badge;

