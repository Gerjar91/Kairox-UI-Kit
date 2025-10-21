import Text from "../UI/Text";
import View from "../UI/View";
import theme from "../theme";

const Texts = () => {
    return (
        <View>
            <Text color={theme.colors.accent[400] } fontWeight={"700"} variant="xs" fontSize={12}>Texto con variant xs</Text>
            <Text variant="sm">Texto con variant sm</Text>
            <Text variant="md">Texto con variant md</Text>
            <Text variant="lg">Texto con variant lg</Text>
            <Text variant="xl">Texto con variant xl</Text>
            <Text variant="2xl">Texto con variant 2xl</Text>
            <Text variant="3xl">Texto con variant 3xl</Text>
            <Text variant="4xl">Texto con variant 4xl</Text>
        </View>
    )
}

export default Texts;