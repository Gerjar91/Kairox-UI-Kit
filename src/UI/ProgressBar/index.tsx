import React, {
  useEffect,
  useRef
} from 'react';
import {
  View,
  Animated,
  ViewStyle
} from 'react-native';
import { styles } from './styles';

export interface ProgressBarProps {
  progress: number; 
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
  borderRadius?: number;
  animated?: boolean;
  animationDuration?: number;
  style?: ViewStyle;
  showPercentage?: boolean;
  marginBottom?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  height = 8,
  backgroundColor = '#E5E7EB',
  progressColor = '#3B82F6',
  borderRadius = 4,
  animated = true,
  animationDuration = 300,
  marginBottom = 0,
  style,
}) => {
  
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  useEffect(() => {
    if (animated) {
      Animated.timing(animatedWidth, {
        toValue: clampedProgress,
        duration: animationDuration,
        useNativeDriver: false,
      }).start();
    } else {
      animatedWidth.setValue(clampedProgress);
    }
  }, [clampedProgress, animated, animationDuration, progress,animatedWidth]);

  const widthInterpolation = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View
      style={[
        styles.container,
        {
          height,
          backgroundColor,
          borderRadius,
          marginBottom,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: widthInterpolation,
            backgroundColor: progressColor,
            borderRadius,
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;

