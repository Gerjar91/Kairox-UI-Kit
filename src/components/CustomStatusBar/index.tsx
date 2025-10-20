import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
} from 'react-native';


const CustomStatusBar: React.FC<StatusBarProps> = ({ backgroundColor, barStyle, ...props }) => (
  <SafeAreaView>
    <StatusBar
      {...props}
      backgroundColor={backgroundColor}
      barStyle={barStyle}
    />
  </SafeAreaView>
);

export default CustomStatusBar;
