import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle
} from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from '../Icon';
import RemovableView from '../RemovableView';

interface HeaderProps extends ViewStyle {
  title?: string;
  leftIcon?: React.ReactNode | null;
  rightIcon?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  backgroundColor?: string;
  children?: React.ReactNode;
  showBackButton?: boolean;
  sizeIcon?: number;
  colorIcon?: string;
  height?: number
}

export const Header: React.FC<HeaderProps> = ({
  title,
  rightIcon,
  onLeftPress,
  onRightPress,
  titleStyle,
  style,
  backgroundColor = 'transparent',
  children,
  sizeIcon = 40,
  colorIcon = 'black',
  height = 60,
  ...rest
}) => {

  return (
    <View
      style={[
        styles.container,
        style,
        {
          height,
          backgroundColor,
          ...rest,
        },
      ]}
    >
      <View style={styles.leftContainer}>
        <RemovableView
          hidden={!onLeftPress}>
          <TouchableOpacity onPress={onLeftPress}>
            <Icon
              as={<MaterialCommunityIcons name="chevron-left" />}
              color={colorIcon}
              size={sizeIcon}
            />
          </TouchableOpacity>
        </RemovableView>
      </View>
      <View style={styles.centerContainer}>
        {children || (
          title && (
            <Text
              style={[styles.title, titleStyle]}
              numberOfLines={1}>
              {title}
            </Text>
          )
        )}
      </View>
      <View style={styles.rightContainer}>
        <RemovableView
          hidden={!onRightPress}>
          <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
            {rightIcon}
          </TouchableOpacity>
        </RemovableView>

      </View>
    </View>
  );
};

export default Header;