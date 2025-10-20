import React from 'react';
import {
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';

import View from './components/View';
import Text from './components/Text';
import Badge from './components/Badge';
import Switch from './components/Switch';
import Checkbox from './components/Checkbox';
import Skeleton from './components/Skeleton';
import Divider from './components/Divider';
import Accordion from './components/Accordion';
import BoxContainer from './components/BoxContainer';
import ProgressBar from './components/ProgressBar';
import Icon from './components/Icon';
import Header from './components/Header';
import CustomStatusBar from './components/CustomStatusBar';
import BoxContent from './components/BoxContent';
import Button from './components/Button';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeContainer = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<string | number>('coffee');
    const [switch1, setSwitch1] = React.useState(false);
    const [switch2, setSwitch2] = React.useState(true);
    const [switch3, setSwitch3] = React.useState(false);
    const [checkbox1, setCheckbox1] = React.useState(false);

    const categoryOptions = [
        {
            label: 'Café',
            value: 'coffee',
            icon: <MaterialCommunityIcons name="coffee" size={20} color="#6B7280" />,
        },
        {
            label: 'Té',
            value: 'tea',
            icon: <MaterialCommunityIcons name="tea" size={20} color="#6B7280" />,
        },
        {
            label: 'Postres',
            value: 'desserts',
            icon: <MaterialCommunityIcons name="cupcake" size={20} color="#6B7280" />,
        },
        {
            label: 'Snacks',
            value: 'snacks',
            icon: <MaterialCommunityIcons name="food" size={20} color="#6B7280" />,
        },
    ];
    return (
        <BoxContainer backgroundColor={'#F5F5F5'}>
            <Header
                backgroundColor='white'
                onLeftPress={() => null}
                title="Karol UI Kit"
            />
            <BoxContent>
                <CustomStatusBar
                    backgroundColor={"white"}
                    barStyle="dark-content"
                />
                <View paddingBottom={80} >
                    <View padding={20}>
                        <Button
                            marginBottom={10}
                            title="Click me"
                            disabled={false}
                            onPress={() => null}
                            borderRadius={10}
                            leftIcon={
                                <MaterialCommunityIcons
                                    name="information"
                                    size={25}
                                    color="white"
                                />}
                        >
                        </Button>
                        <Button
                            variant='outline'
                            title="Click me"
                            disabled={false}
                            onPress={() => null}
                        />

                        <Text>
                            Divider horizontal básico
                        </Text>
                        <Divider marginVertical={16}
                            height={3} />
                        <Text
                            marginBottom={16}>
                            Accordions
                        </Text>
                        <Accordion
                            title="¿Qué es un Accordion?"
                            borderColor={'#70c0f5'}
                        >
                            <Text
                                color='gray'>
                                Un accordion es un componente UI que permite mostrar y ocultar
                                contenido de forma interactiva. Es útil para organizar
                                información en espacios reducidos.
                            </Text>
                        </Accordion>
                        <Divider
                            marginVertical={16}
                            height={3} />

                        <Text
                            marginBottom={16}>
                            Skeleton
                        </Text>
                        <View
                            style={{ marginBottom: 50 }}
                            backgroundColor={"#EBE4E4"}
                            padding={10}
                            borderRadius={10}
                            flexDirection='row'
                        >
                            <Skeleton
                                width={40}
                                duration={2000}
                                baseColor='#EBE4E4'
                                highlightColor='#A8A5A5'
                                height={40}
                                marginRight={10}
                                borderRadius={100}
                            />
                            <Skeleton
                                flex={1}
                                duration={2000}
                                baseColor='#EBE4E4'
                                highlightColor='#A8A5A5'
                                height={40}
                                borderRadius={8}
                            />
                        </View>


                        <Text
                            marginBottom={16}>
                            Progress Bars
                        </Text>

                        <Text
                            marginBottom={8}>
                            Barra básica - 43%
                        </Text>
                        <ProgressBar
                            height={20}
                            progress={67}
                            marginBottom={16}
                            borderRadius={40}
                        />

                        <Divider
                            marginVertical={16}
                            height={3}
                        />

                        <Text
                            marginBottom={16}>
                            Icons
                        </Text>
                        <View
                            flexDirection={'row'}
                            alignItems={'center'}
                            marginBottom={10}
                            gap={12}>
                            <Icon
                                as={<MaterialCommunityIcons name="alert-circle" />}
                                color="primary.500"
                                size={24}
                            />
                            <Icon
                                as={<MaterialCommunityIcons name="alert-circle" />}
                                size={24}
                            />
                            <Icon
                                as={<Ionicons name="heart" />}
                                size={32}
                            />
                            <Icon
                                as={<MaterialIcons name="star" />}
                                size={40}
                            />
                            <Icon
                                as={<Ionicons name="checkmark-circle" />}
                                size={48}
                            />
                        </View>
                        <Divider marginVertical={16}
                            height={3} />

                        <Text
                            marginBottom={16}>
                            Select / Dropdown
                        </Text>
                        <Divider marginVertical={16}
                            height={3} />

                        <Text
                            marginBottom={16}>
                            Badges / Tags
                        </Text>
                        <View
                            flexDirection={'row'}
                            flexWrap={'wrap'}
                            gap={8}
                            marginBottom={16}>
                            <Badge
                                variant="primary"
                                size="lg"
                            >Primary</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="error">Error</Badge>
                            <Badge variant="info">Info</Badge>
                            <Badge variant="neutral">Neutral</Badge>
                        </View>

                        <Divider marginVertical={16}
                            height={3} />

                        <Text
                            marginBottom={16}>
                            Switch / Toggle
                        </Text>

                        <Text
                            marginBottom={8}>
                            Tamaños
                        </Text>
                        <View
                            flexDirection={'row'}
                            alignItems={'center'}
                            gap={12}
                            marginBottom={16}>
                            <Switch
                                value={switch1}
                                onValueChange={setSwitch1}
                                size="sm"
                            />
                            <Switch
                                value={switch2}
                                onValueChange={setSwitch2}
                                size="md"
                            />
                            <Switch
                                value={switch3}
                                onValueChange={setSwitch3}
                                size="lg"
                            />
                            <Switch
                                value={switch3}
                                onValueChange={setSwitch3}
                                size="xl"
                            />
                        </View>

                        <Divider marginVertical={16}
                            height={3} />
                        <Checkbox
                            checked={checkbox1}
                            onChange={setCheckbox1}
                            label="Acepto los términos y condiciones"
                            activeColor="#007AFF"
                            inactiveColor="transparent"
                            rounded={true}
                            icon={<MaterialIcons name="check" />}
                        />
                    </View>

                </View>
            </BoxContent>

        </BoxContainer>
    );
};

export default HomeContainer;

