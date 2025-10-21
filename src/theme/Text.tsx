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
    fontFamily: Fonts.light,
    fontWeight: '300' as const,
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
    fontFamily: Fonts.regular,
    fontWeight: '400' as const,
  },
  lg: {
    fontSize: 18,
    fontFamily: Fonts.regular,
    fontWeight: '400' as const,
  },
  xl: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    fontWeight: '700' as const,
  },
  '2xl': {
    fontSize: 24,
    fontFamily: Fonts.bold,
    fontWeight: '700' as const,
  },
  '3xl': {
    fontSize: 30,
    fontFamily: Fonts.bold,
    fontWeight: '700' as const,
  },
  '4xl': {
    fontSize: 36,
    fontFamily: Fonts.bold,
    fontWeight: '700' as const,
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

