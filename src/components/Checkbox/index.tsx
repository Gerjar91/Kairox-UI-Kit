import React from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  View,
  Text,
} from 'react-native';
import { styles } from './styles';
import Icon from '../Icon';

type CheckboxSize = 'sm' | 'md' | 'lg';
type CheckboxVariant = 'primary' | 'success' | 'warning' | 'error' | 'info';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  disabled?: boolean;
  label?: string;
  labelPosition?: 'left' | 'right';
  checkedColor?: string;
  uncheckedColor?: string;
  checkmarkColor?: string;
  activeborderColor?: string;
  inactiveborderColor?: string;
  style?: ViewStyle;
  indeterminate?: boolean;
  rounded?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  icon?: React.ReactElement;
  iconColor?: string;
}

const getSizeValues = (size: CheckboxSize) => {
  const sizes = {
    sm: {
      size: 18,
      checkmarkSize: 10,
      borderWidth: 1.5,
      fontSize: 12,
    },
    md: {
      size: 24,
      checkmarkSize: 14,
      borderWidth: 2,
      fontSize: 14,
    },
    lg: {
      size: 30,
      checkmarkSize: 18,
      borderWidth: 2.5,
      fontSize: 16,
    },
  };
  return sizes[size];
};



export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  size = 'md',
  disabled = false,
  label,
  labelPosition = 'right',
  activeColor = '#007AFF',
  inactiveColor = '#D1D5DB',
  activeborderColor = '#007AFF',
  inactiveborderColor = '#D1D5DB',
  style,
  rounded = false,
  icon,
  iconColor='white',
}) => {
  const sizeValues = getSizeValues(size);

  const handlePress = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const renderCheckmark = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon && checked && (
        <Icon
          color={iconColor}
          size={sizeValues.checkmarkSize}
          as={icon as React.ReactElement}
          />
        )}

      </View>
    );
  };

  const renderLabel = () => {
    if (!label) return null;

    return (
      <Text
        style={[
          styles.label,
          {
            fontSize: sizeValues.fontSize,
            color: disabled ? '#9CA3AF' : '#374151',
            marginRight: labelPosition === 'left' ? 12 : 0,
            marginLeft: labelPosition === 'right' ? 12 : 0,
          },
        ]}
      >
        {label}
      </Text>
    );
  };

  const checkboxComponent = (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={disabled}
      style={[styles.container, style]}
    >
      <View
        style={[
          styles.box,
          {
            width: sizeValues.size,
            height: sizeValues.size,
            borderRadius: rounded ? sizeValues.size * 0.2 : 0,
            borderWidth: sizeValues.borderWidth,
            borderColor: checked ? activeborderColor : inactiveborderColor,
            backgroundColor: checked ? activeColor : inactiveColor,
            opacity: disabled ? 0.5 : 1,
          },
        ]}
      >
        { renderCheckmark()}
      </View>
    </TouchableOpacity>
  );

  if (label) {
    return (
      <View style={[styles.wrapper, { opacity: disabled ? 0.6 : 1 }]}>
        {labelPosition === 'left' && renderLabel()}
        {checkboxComponent}
        {labelPosition === 'right' && renderLabel()}
      </View>
    );
  }

  return checkboxComponent;
};

export default Checkbox;

