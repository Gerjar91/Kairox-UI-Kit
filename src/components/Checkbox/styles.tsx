import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  checkmarkLine1: {
    position: 'absolute',
    transform: [{ rotate: '45deg' }, { translateX: -2 }, { translateY: 1 }],
    borderRadius: 2,
  },
  checkmarkLine2: {
    position: 'absolute',
    transform: [{ rotate: '-45deg' }, { translateX: 2 }, { translateY: 1 }],
    borderRadius: 2,
  },
  indeterminateLine: {
    borderRadius: 2,
  },
  label: {
    fontWeight: '500',
  },
});

