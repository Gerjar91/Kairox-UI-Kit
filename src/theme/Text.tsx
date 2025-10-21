import { TextStyle } from "react-native";
import Fonts from "./Fonts";

const baseStyle = {
  fontFamily: Fonts.regular,
  fontWeight: '400' as const,
  allowFontScaling: true,
  color: '#1A1A1A', 
};

export const variants = {
  xs: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    fontWeight: '400' as const,
    color: '#4B5563', 
  },
  sm: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    fontWeight: '400' as const,
    color: '#374151', 
  },
  md: {
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  lg: {
    fontSize: 18,
    fontFamily: Fonts.medium,
  },
  xl: {
    fontSize: 20,
    fontFamily: Fonts.semiBold,
  },
  '2xl': {
    fontSize: 24,
    fontFamily: Fonts.bold,
  },
  '3xl': {
    fontSize: 30,
    fontFamily: Fonts.bold,
  },
  '4xl': {
    fontSize: 36,
    fontFamily: Fonts.extraBold,
  },
};

interface TextConfig {
  baseStyle: TextStyle;
  variants: {
    [key: string]: TextStyle;
  };
  defaultProps: {
    variant: string;
  };
}

const Text: TextConfig = {
  baseStyle,
  variants,
  defaultProps: {
    variant: 'md',
  },
};

export default Text;

