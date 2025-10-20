import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import styles from './styles';
import View from '../View';

interface BoxContentProps {
  children?: ReactNode;
  keyboardShouldPersistTaps?: boolean | 'always' | 'never' | 'handled';
  backgroundColor?: string;
  style?: ViewStyle;
  bottomOffset?: number;
  [key: string]: unknown;
}

const BoxContent: React.FC<BoxContentProps> = ({
  children,
  keyboardShouldPersistTaps = 'handled',
  backgroundColor = 'white',
  style = styles.container,
  bottomOffset = 100,
  ...rest
}) => {

  return (
    <View
      flex={1}
      backgroundColor={backgroundColor || 'white'}
    >
      <View
        flex={1}
      >
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          contentContainerStyle={styles.scrollContent}
          bottomOffset={bottomOffset}
          scrollEnabled
          {...rest}
        >
          <View style={style}>
            {children}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default BoxContent;