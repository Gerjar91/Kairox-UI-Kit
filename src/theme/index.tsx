import colors from './Colors';
import Text from './Text';
import Button from './Button';
import Input from './Input';

interface Theme {
  colors: typeof colors;
  components?: {
    Text: typeof Text;
    Button: typeof Button;
    Input: typeof Input;
  };
}
const theme: Theme = {
  colors,
  components: {
    Text,
    Button,
    Input,
  },
};

export default theme;
