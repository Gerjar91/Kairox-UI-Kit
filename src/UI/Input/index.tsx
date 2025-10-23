import React, { useMemo, useState, forwardRef } from 'react';
import {
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeProvider';
import { variants } from '../../theme/Input';
import Text from '../Text';
import {
  containerStyle as styles_container,
  labelStyle as styles_label,
  inputContainerStyle as styles_inputContainer,
  leftElementStyle as styles_leftElement,
  rightElementStyle as styles_rightElement,
  textInputStyle as styles_textInput,
  passwordToggleStyle as styles_passwordToggle,
  passwordToggleButtonStyle as styles_passwordToggleButton,
} from './styles';

type InputVariant = 'default' | 'filled' | 'outlined';

interface InputProps extends TextInputProps {
  variant?: InputVariant;
  disabled?: boolean;
  label?: string;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
  InputRightElement?: React.ReactElement;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  borderColor?: string;
  placeholderTextColor?: string;
  multiline?: boolean;
  secureTextEntry?: boolean;
  defaultValue?: string;
  value?: string;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
}

export const Input = forwardRef<TextInput, InputProps>(({
  variant = 'default',
  disabled = false,
  label,
  leftElement,
  rightElement,
  InputRightElement,
  containerStyle,
  inputStyle,
  borderColor,
  placeholderTextColor,
  multiline = false,
  secureTextEntry = false,
  defaultValue,
  value,
  onFocus,
  onBlur,
  ...rest
}, ref) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [hideText, setHideText] = useState(secureTextEntry);

  const onHideShowTextPress = () => setHideText(!hideText);

  const inputContainerStyle = useMemo<ViewStyle>(() => {
    if (!theme?.components?.Input) {
      return {};
    }
    
    const inputConfig = theme.components.Input;
    const selectedVariant = variant || inputConfig.defaultProps.variant;
    
    return {
      ...inputConfig.baseStyle,
      ...inputConfig.variants[selectedVariant].input,
      ...(disabled ? inputConfig.disabledStyle : {}),
      ...(isFocused ? inputConfig.focusStyle : {}),
      ...(borderColor ? { borderColor } : {}),
      ...containerStyle,
    };
  }, [variant, disabled, isFocused, theme, containerStyle, borderColor]);

  const textStyle = useMemo<TextStyle>(() => {
    if (!theme?.components?.Input) {
      return {};
    }
    
    const inputConfig = theme.components.Input;
    const selectedVariant = variant || inputConfig.defaultProps.variant;
    
    return {
      ...inputConfig.baseTextStyle,
      ...inputConfig.variants[selectedVariant].text,
      ...inputStyle,
    };
  }, [variant, theme, inputStyle]);

  const computedPlaceholderTextColor = useMemo(() => {
    if (placeholderTextColor) {
      return placeholderTextColor;
    }
    
    if (!theme?.components?.Input) {
      return '#9CA3AF';
    }
    
    const inputConfig = theme.components.Input;
    const selectedVariant = variant || inputConfig.defaultProps.variant;
    return inputConfig.variants[selectedVariant].placeholder.color;
  }, [placeholderTextColor, variant, theme]);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const renderRightElement = () => {
    if (InputRightElement) {
      return (
        <View style={styles_rightElement}>
          {InputRightElement}
        </View>
      );
    }
    
    if (rightElement) {
      return (
        <View style={styles_rightElement}>
          {rightElement}
        </View>
      );
    }
    
    if (secureTextEntry) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onHideShowTextPress}
          style={styles_passwordToggle}
        >
          <View style={styles_passwordToggleButton}>
            <Ionicons 
              name={hideText ? 'eye-outline' : 'eye-off-outline'} 
              size={20}
              color={theme?.colors?.primary?.[600] || '#3B82F6'}
            />
          </View>
        </TouchableOpacity>
      );
    }
    
    return null;
  };

  return (
    <View style={styles_container}>
      {label && (
        <Text 
          variant="sm" 
          style={styles_label}
        >
          {label}
        </Text>
      )}
      
      <View style={[inputContainerStyle, styles_inputContainer]}>
        {leftElement && (
          <View style={styles_leftElement}>
            {leftElement}
          </View>
        )}
        
        <TextInput
          ref={ref}
          style={[textStyle, styles_textInput]}
          placeholderTextColor={computedPlaceholderTextColor}
          editable={!disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline={multiline}
          secureTextEntry={hideText}
          defaultValue={defaultValue}
          value={value}
          {...rest}
        />
        
        {renderRightElement()}
      </View>
    </View>
  );
});

Input.displayName = 'Input';

export default Input;
