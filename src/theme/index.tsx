import colors from './Colors';
import Text from './Text';
import Button from './Button';

interface Theme {
  colors: typeof colors;
  components?: {
    Text: typeof Text;
    Button: typeof Button;
  };
}
const theme: Theme = {
  colors,
  components: {
    Text,
    Button,
  },
};

export default theme;
