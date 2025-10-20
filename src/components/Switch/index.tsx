import React, { useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  Animated,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';

type SwitchSize = 'sm' | 'md' | 'lg' | 'xl';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  size?: SwitchSize;
  thumbColor?: string;
  style?: ViewStyle;
  backgroundActiveColor?: string;
  backgroundInactiveColor?: string;
}

const getSizeValues = (size: SwitchSize) => {
  const sizes = {
    sm: {
      width: 40,
      height: 22,
      thumbSize: 16,
      padding: 3,
      fontSize: 12,
    },
    md: {
      width: 50,
      height: 28,
      thumbSize: 22,
      padding: 3,
      fontSize: 14,
    },
    lg: {
      width: 60,
      height: 34,
      thumbSize: 28,
      padding: 3,
      fontSize: 16,
    },
    xl: {
      width: 70,
      height: 40,
      thumbSize: 34,
      padding: 3,
      fontSize: 18,
    },
  };
  return sizes[size];
};


export const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  size = 'md',
  backgroundActiveColor = '#969696',
  backgroundInactiveColor = '#EDEDED',
  thumbColor = 'white',
  style,

}) => {
  const sizeValues = getSizeValues(size);
  const translateX = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? 1 : 0,
      useNativeDriver: true,
      bounciness: 8,
      speed: 12,
    }).start();
  }, [value, translateX]);

  const handlePress = () => {
      onValueChange(!value);
  };

  const thumbTranslateX = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, sizeValues.width - sizeValues.thumbSize - sizeValues.padding * 2],
  });

  const switchComponent = (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={[styles.container, style]}
    >
      <Animated.View
        style={[
          styles.track,
          {
            width: sizeValues.width,
            height: sizeValues.height,
            borderRadius: sizeValues.height / 2,
            backgroundColor: value ? backgroundActiveColor : backgroundInactiveColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              width: sizeValues.thumbSize,
              height: sizeValues.thumbSize,
              borderRadius: sizeValues.thumbSize / 2,
              backgroundColor: thumbColor,
              transform: [{ translateX: thumbTranslateX }],
              marginLeft: sizeValues.padding,
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
  return switchComponent;
};

export default Switch;

