import { ViewStyle, TextStyle } from "react-native";
import Fonts from "./Fonts";

const baseStyle: ViewStyle = {
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#D1D5DB',
  paddingHorizontal: 12,
  paddingVertical: 12,
  backgroundColor: 'white',
  minHeight: 44,
};

const baseTextStyle: TextStyle = {
  fontSize: 16,
  fontFamily: Fonts.regular,
  color: '#1F2937',
};

const disabledStyle: ViewStyle = {
  opacity: 0.6,
  backgroundColor: '#F9FAFB',
};

const errorStyle: ViewStyle = {
  borderColor: '#EF4444',
  borderWidth: 2,
};

const focusStyle: ViewStyle = {
  borderColor: '#3B82F6',
  borderWidth: 2,
};

export const variants = {
  default: {
    input: {
      borderColor: '#D1D5DB',
      backgroundColor: 'white',
    },
    text: {
      color: '#1F2937',
      fontFamily: Fonts.regular,
    },
    placeholder: {
      color: '#9CA3AF',
    },
  },
  filled: {
    input: {
      borderColor: 'transparent',
      backgroundColor: '#F9FAFB',
    },
    text: {
      color: '#1F2937',
      fontFamily: Fonts.regular,
    },
    placeholder: {
      color: '#9CA3AF',
    },
  },
  outlined: {
    input: {
      borderColor: '#D1D5DB',
      backgroundColor: 'transparent',
      borderWidth: 2,
    },
    text: {
      color: '#1F2937',
      fontFamily: Fonts.regular,
    },
    placeholder: {
      color: '#9CA3AF',
    },
  },
};

interface InputConfig {
  baseStyle: ViewStyle;
  baseTextStyle: TextStyle;
  disabledStyle: ViewStyle;
  errorStyle: ViewStyle;
  focusStyle: ViewStyle;
  variants: typeof variants;
  defaultProps: {
    variant: keyof typeof variants;
  };
}

const Input: InputConfig = {
  baseStyle,
  baseTextStyle,
  disabledStyle,
  errorStyle,
  focusStyle,
  variants,
  defaultProps: {
    variant: 'default',
  },
};

export default Input;
