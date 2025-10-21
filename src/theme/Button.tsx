import { ViewStyle, TextStyle } from "react-native";
import Fonts from "./Fonts";

const baseStyle: ViewStyle = {
  borderRadius: 10,
  width: '100%',
  paddingVertical: 12,
  paddingHorizontal: 24,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
};

const baseTextStyle: TextStyle = {
  fontSize: 16,
  fontFamily: Fonts.semiBold,
  textAlign: 'center',
};

const disabledStyle: ViewStyle = {
  opacity: 0.7,
};

export const variants = {
  solid: {
    button: {
      backgroundColor: '#007AFF',
    },
    text: {
      color: 'white',
      fontFamily: Fonts.bold,
    } ,
  },
  outline: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: '#007AFF',
    },
    text: {
      color: '#007AFF',
      fontFamily: Fonts.medium,
    }
  },
  link: {
    button: {
      backgroundColor: 'transparent',
      paddingVertical: 4,
    },
    text: {
      color: '#007AFF',
      fontFamily: Fonts.regular,
      textDecorationLine: 'underline',
    } ,
  },
};

interface ButtonConfig {
  baseStyle: ViewStyle;
  baseTextStyle: TextStyle;
  disabledStyle: ViewStyle;
  variants: typeof variants;
  defaultProps: {
    variant: keyof typeof variants;
  };
}

const Button: ButtonConfig = {
  baseStyle,
  baseTextStyle,
  disabledStyle,
  variants,
  defaultProps: {
    variant: 'solid',
  },
};

export default Button;
  