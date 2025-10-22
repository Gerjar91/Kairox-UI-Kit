import React, { useState, useMemo } from 'react';
import {
  TextInput as RNTextInput,
  View,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import Text from '../Text';
import { styles } from './styles';

type TextInputSize = 'small' | 'medium' | 'large';
type TextInputVariant = 'default' | 'outlined' | 'filled';

interface TextInputProps extends RNTextInputProps, ViewStyle {
  label?: string;
  error?: string;
  helperText?: string;
  size?: TextInputSize;
  variant?: TextInputVariant;
  disabled?: boolean;
  required?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  helperStyle?: TextStyle;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  helperText,
  size = 'medium',
  variant = 'default',
  disabled = false,
  required = false,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  helperStyle,
  leftIcon,
  rightIcon,
  onFocus,
  onBlur,
  value,
  onChangeText,
  placeholder,
  ...rest
}) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const inputContainerStyle = useMemo<ViewStyle>(() => {
    const baseStyle = styles.base;
    const sizeStyle = styles[size];
    const focusedStyle = isFocused ? styles.focused : {};
    const errorStyle = error ? styles.error : {};
    const disabledStyle = disabled ? styles.disabled : {};

    return {
      ...baseStyle,
      ...sizeStyle,
      ...focusedStyle,
      ...errorStyle,
      ...disabledStyle,
      flexDirection: 'row',
      alignItems: 'center',
      ...rest,
    };
  }, [size, isFocused, error, disabled, rest]);

  const textInputStyle = useMemo<TextStyle>(() => {
    return {
      flex: 1,
      fontSize: size === 'small' ? 14 : size === 'large' ? 18 : 16,
      color: disabled ? '#9CA3AF' : '#374151',
      ...inputStyle,
    };
  }, [size, disabled, inputStyle]);

  const labelTextStyle = useMemo<TextStyle>(() => {
    return {
      ...styles.label,
      color: error ? '#EF4444' : '#374151',
      ...labelStyle,
    };
  }, [error, labelStyle]);

  const renderLabel = () => {
    if (!label) return null;
    
    return (
      <Text style={labelTextStyle}>
        {label}
        {required && <Text style={{ color: '#EF4444' }}> *</Text>}
      </Text>
    );
  };

  const renderError = () => {
    if (!error) return null;
    
    return (
      <Text style={[styles.errorText, errorStyle]}>
        {error}
      </Text>
    );
  };

  const renderHelperText = () => {
    if (!helperText || error) return null;
    
    return (
      <Text style={[styles.helperText, helperStyle]}>
        {helperText}
      </Text>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {renderLabel()}
      
      <View style={inputContainerStyle}>
        {leftIcon && (
          <View style={{ marginRight: 8 }}>
            {leftIcon}
          </View>
        )}
        
        <RNTextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          editable={!disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={textInputStyle}
          {...rest}
        />
        
        {rightIcon && (
          <View style={{ marginLeft: 8 }}>
            {rightIcon}
          </View>
        )}
      </View>
      
      {renderError()}
      {renderHelperText()}
    </View>
  );
};

export default TextInput;
