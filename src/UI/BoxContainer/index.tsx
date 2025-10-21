import React, { ReactNode } from 'react';
import View from '../View';

interface BoxContainerProps {
  backgroundColor?: string;
  children: ReactNode;
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  backgroundColor = 'white',
  children,
}) => {
  return (
    <View
      flex={1}
      backgroundColor={backgroundColor}
    >
      {children}
    </View>
  );
};

export default BoxContainer;
