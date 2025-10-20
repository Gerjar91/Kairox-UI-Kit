import React, {
  useEffect,
  useRef
} from 'react';
import {
  View,
  Animated,
  ViewStyle,
  DimensionValue
} from 'react-native';
import { styles } from './styles';

interface SkeletonProps extends ViewStyle {
    width?: DimensionValue;
    height?: DimensionValue;
    borderRadius?: number;
    style?: ViewStyle;
    duration?: number;
    baseColor?: string;
    highlightColor?: string;
  }

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 20,
  borderRadius = 4,
  style,
  duration = 1000,
  baseColor = '#E1E9EE',
  highlightColor = '#F2F8FC',
  ...rest
}) => {

  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ])
    );
    shimmerAnimation.start();
    return () => {
      shimmerAnimation.stop();
    };
  }, [animatedValue, duration]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 1],
  });

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
          backgroundColor: baseColor,
          ...rest,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.shimmer,
          {
            backgroundColor: highlightColor,
            opacity,
          },
        ]}
      />
    </View>
  );
};

export default Skeleton;