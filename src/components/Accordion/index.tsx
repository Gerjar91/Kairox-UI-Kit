import React, {
  useState,
  useRef
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ViewStyle,
  TextStyle
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import Icon from '../Icon';

interface AccordionProps extends ViewStyle {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  contentStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  iconColor?: string;
  iconSize?:  number;
  onToggle?: (isExpanded: boolean) => void;
  leftIcon?: React.ReactElement;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultExpanded = false,
  style,
  titleStyle,
  contentStyle,
  headerStyle,
  iconColor = 'black',
  iconSize = 20,
  leftIcon,
  onToggle,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const animatedHeight = useRef(new Animated.Value(defaultExpanded ? 1 : 0)).current;
  const rotateValue = useRef(new Animated.Value(defaultExpanded ? 1 : 0)).current;

  const toggleAccordion = () => {
    const newExpandedState = !expanded;
    setExpanded(newExpandedState);

    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: newExpandedState ? 1 : 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(rotateValue, {
        toValue: newExpandedState ? 1 : 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    if (onToggle) {
      onToggle(newExpandedState);
    }
  };

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const maxHeight = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000],
  });

  return (
    <View
      style={[
        styles.container,
        {
          ...rest,
        },
        style,
      ]}
    >
      <TouchableOpacity
        style={[styles.header, headerStyle]}
        onPress={toggleAccordion}
        activeOpacity={0.7}
      >
        {leftIcon && 
         <Icon
         as={leftIcon}
         size={iconSize as number}
       />
        }
        <Text
          style={[styles.title, titleStyle]}>
          {title}
        </Text>
        <Animated.View
          style={{
            transform: [{ rotate: rotateInterpolate }],
          }}
        >
          <Icon
            as={<Ionicons name="chevron-down" />}
            size={iconSize as number}
          />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.contentWrapper,
          {
            maxHeight,
            opacity: animatedHeight,
          },
        ]}
      >
        <View style={[styles.content, contentStyle]}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

