import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface Props {
  children: ReactNode;
  hidden: boolean;
  [key: string]: unknown;
}

const RemovableView: React.FC<Props> = ({
  children = null,
  hidden = false,
  ...rest
}) => {
  if (hidden) {
    return <View />;
  }
  return (
    <View {...rest}>
      {children}
    </View>
  );
};

export default RemovableView;
