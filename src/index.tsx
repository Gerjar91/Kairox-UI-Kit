import React from 'react';
import {
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';

import {
    View,
    Text,
    Badge,
    Switch,
    Checkbox,
    Skeleton,
    Divider,
    Accordion,
    BoxContainer,
    ProgressBar,
    Icon,
    Header,
    CustomStatusBar,
    BoxContent,
    Button
} from './UI';

const HomeContainer = () => {
    // Estados para componentes interactivos
    const [switch1, setSwitch1] = React.useState(false);
    const [switch2, setSwitch2] = React.useState(true);
    const [switch3, setSwitch3] = React.useState(false);
    const [checkbox1, setCheckbox1] = React.useState(false);
    const [checkbox2, setCheckbox2] = React.useState(true);

    return (
        <BoxContainer backgroundColor='#F5F5F5'>
            <CustomStatusBar
                backgroundColor='white'
                barStyle='dark-content'
            />

            <Header
                backgroundColor='white'
                onLeftPress={() => console.log('Back pressed')}
                title='Kairox UI Kit'
            />

            <BoxContent>
                <View paddingHorizontal={20} paddingTop={20} paddingBottom={80}>
                    {/* ========== SECCIÓN: TIPOGRAFÍA ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Tipografía
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Sistema de texto con fuentes DM Sans
                    </Text>

                    <Text variant='4xl' marginBottom={8}>
                        Título 4XL
                    </Text>
                    <Text variant='3xl' marginBottom={8}>
                        Texto 3XL
                    </Text>
                    <Text variant='2xl' marginBottom={8}>
                        Título 2XL
                    </Text>
                    <Text variant='xl' marginBottom={8}>
                        Título XL
                    </Text>
                    <Text variant='lg' marginBottom={8}>
                        Texto Large
                    </Text>
                    <Text variant='md' marginBottom={8}>
                        Texto Medium (por defecto)
                    </Text>
                    <Text variant='sm' marginBottom={8}>
                        Texto Small
                    </Text>
                    <Text variant='xs' marginBottom={24}>
                        Texto Extra Small
                    </Text>

                    <Divider marginVertical={24} height={2} />

                    {/* ========== SECCIÓN: BOTONES ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Botones
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Botones con variantes y estilos personalizados
                    </Text>

                    <Button
                        title='Botón Primary'
                        variant='solid'
                        onPress={() => console.log('Primary pressed')}
                        marginBottom={12}
                    />

                    <Button
                        title='Botón con Icono'
                        onPress={() => console.log('With icon pressed')}
                        leftIcon={
                            <MaterialCommunityIcons
                                name='heart'
                                size={20}
                                color='white'
                                style={{ marginRight: 8 }}
                            />
                        }
                        marginBottom={12}
                    />

                    <Button
                        title='Botón Outline'
                        variant='outline'
                        onPress={() => console.log('Outline pressed')}
                        marginBottom={12}
                    />

                    <Button
                        title='Botón Link'
                        variant='link'
                        onPress={() => console.log('Link pressed')}
                        marginBottom={12}
                    />

                    <Button
                        title='Botón Deshabilitado'
                        variant='solid'
                        disabled={true}
                        onPress={() => console.log('Disabled')}
                        marginBottom={24}
                    />

                    <Divider marginVertical={24} height={2} />

                    {/* ========== SECCIÓN: BADGES ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Badges
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Etiquetas con diferentes variantes de color
                    </Text>

                    <View
                        flexDirection='row'
                        flexWrap='wrap'
                        gap={8}
                        marginBottom={24}
                    >
                        <Badge variant='primary' size='lg'>
                            Primary
                        </Badge>
                        <Badge variant='secondary'>Secondary</Badge>
                        <Badge variant='success'>Success</Badge>
                        <Badge variant='warning'>Warning</Badge>
                        <Badge variant='error'>Error</Badge>
                        <Badge variant='info'>Info</Badge>
                        <Badge variant='neutral'>Neutral</Badge>
                    </View>

                    <Divider marginVertical={24} height={2} />

                    {/* ========== SECCIÓN: ICONOS ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Iconos
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Wrapper para iconos con soporte de colores del tema
                    </Text>

                    <View
                        flexDirection='row'
                        alignItems='center'
                        gap={16}
                        marginBottom={24}
                    >
                        <Icon
                            as={<MaterialCommunityIcons name='home' />}
                            color='primary.500'
                            size={24}
                        />
                        <Icon
                            as={<Ionicons name='heart' />}
                            color='#E74C3C'
                            size={28}
                        />
                        <Icon
                            as={<MaterialIcons name='star' />}
                            color='#F39C12'
                            size={32}
                        />
                        <Icon
                            as={<Ionicons name='checkmark-circle' />}
                            color='#27AE60'
                            size={36}
                        />
                        <Icon
                            as={<MaterialCommunityIcons name='alert-circle' />}
                            size={40}
                        />
                    </View>

                    <Divider marginVertical={24} height={2} />

                    {/* ========== SECCIÓN: SWITCH ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Switch
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Interruptores en diferentes tamaños
                    </Text>

                    <View marginBottom={12}>
                        <View
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='space-between'
                            marginBottom={12}
                        >
                            <Text>Small</Text>
                            <Switch
                                value={switch1}
                                onValueChange={setSwitch1}
                                size='sm'
                            />
                        </View>

                        <View
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='space-between'
                            marginBottom={12}
                        >
                            <Text>Medium</Text>
                            <Switch
                                value={switch2}
                                onValueChange={setSwitch2}
                                size='md'
                            />
                        </View>

                        <View
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='space-between'
                            marginBottom={12}
                        >
                            <Text>Large</Text>
                            <Switch
                                value={switch3}
                                onValueChange={setSwitch3}
                                size='lg'
                            />
                        </View>
                    </View>

                    <Divider marginVertical={24} height={2} />

                    {/* ========== SECCIÓN: CHECKBOX ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Checkbox
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Casillas de verificación personalizables
                    </Text>

                    <Checkbox
                        checked={checkbox1}
                        onChange={setCheckbox1}
                        label='Acepto los términos y condiciones'
                        activeColor='#007AFF'
                        inactiveColor='transparent'
                        rounded={true}
                        icon={<MaterialIcons name='check' />}
                    />

                    <Checkbox
                        checked={checkbox2}
                        onChange={setCheckbox2}
                        label='Deseo recibir notificaciones'
                        activeColor='#27AE60'
                        inactiveColor='transparent'
                        rounded={false}
                        icon={<MaterialIcons name='check' />}
                    />

                    <Divider marginVertical={24} height={2} />

                    {/* ========== SECCIÓN: PROGRESS BAR ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Progress Bar
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Barras de progreso animadas
                    </Text>

                    <Text variant='sm' marginBottom={8}>
                        Progreso: 25%
                    </Text>
                    <ProgressBar
                        progress={25}
                        height={8}
                        marginBottom={16}
                        borderRadius={10}
                    />

                    <Text variant='sm' marginBottom={8}>
                        Progreso: 67%
                    </Text>
                    <ProgressBar
                        progress={67}
                        height={12}
                        marginBottom={16}
                        borderRadius={20}
                    />

                    <Text variant='sm' marginBottom={8}>
                        Progreso: 90%
                    </Text>
                    <ProgressBar
                        progress={90}
                        height={16}
                        marginBottom={24}
                        borderRadius={30}
                    />

                    <Divider marginVertical={24} height={2} />

                    {/* ========== SECCIÓN: SKELETON ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Skeleton
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Placeholders animados para carga de contenido
                    </Text>

                    <View
                        backgroundColor='#EBE4E4'
                        padding={16}
                        borderRadius={12}
                        marginBottom={16}
                    >
                        <View flexDirection='row' marginBottom={12}>
                            <Skeleton
                                width={60}
                                height={60}
                                borderRadius={30}
                                marginRight={12}
                                duration={2000}
                                baseColor='#EBE4E4'
                                highlightColor='#A8A5A5'
                            />
                            <View flex={1}>
                                <Skeleton
                                    height={20}
                                    borderRadius={4}
                                    marginBottom={8}
                                    duration={2000}
                                    baseColor='#EBE4E4'
                                    highlightColor='#A8A5A5'
                                />
                                <Skeleton
                                    height={16}
                                    borderRadius={4}
                                    width='70%'
                                    duration={2000}
                                    baseColor='#EBE4E4'
                                    highlightColor='#A8A5A5'
                                />
                            </View>
                        </View>

                        <Skeleton
                            height={12}
                            borderRadius={4}
                            marginBottom={8}
                            duration={2000}
                            baseColor='#EBE4E4'
                            highlightColor='#A8A5A5'
                        />
                        <Skeleton
                            height={12}
                            borderRadius={4}
                            width='80%'
                            duration={2000}
                            baseColor='#EBE4E4'
                            highlightColor='#A8A5A5'
                        />
                    </View>

                    <Divider marginVertical={24} height={2} />

                    {/* ========== SECCIÓN: ACCORDION ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Accordion
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Contenido expandible y colapsable
                    </Text>

                    <Accordion
                        title='¿Qué es Kairox UI Kit?'
                        borderColor='#007AFF'
                        marginBottom={12}
                    >
                        <Text color='#6B7280'>
                            Kairox UI Kit es una librería de componentes UI para React Native
                            con un sistema de tema personalizable, fuentes DM Sans y componentes
                            reutilizables listos para usar.
                        </Text>
                    </Accordion>

                    <Accordion
                        title='¿Cómo usar los componentes?'
                        borderColor='#27AE60'
                        marginBottom={12}
                    >
                        <Text color='#6B7280'>
                            Simplemente importa los componentes que necesites y úsalos en tu
                            aplicación. Todos los componentes aceptan props personalizadas
                            y se integran con el sistema de tema.
                        </Text>
                    </Accordion>

                    <Accordion
                        title='¿Puedo personalizar los estilos?'
                        borderColor='#E74C3C'
                        marginBottom={24}
                    >
                        <Text color='#6B7280'>
                            Sí, todos los componentes aceptan props de estilo y puedes
                            personalizar el tema global modificando los archivos en la
                            carpeta theme/.
                        </Text>
                    </Accordion>

                    <Divider marginVertical={24} height={2} />

                    {/* ========== SECCIÓN: DIVIDER ========== */}
                    <Text variant='3xl' marginBottom={8}>
                        Divider
                    </Text>
                    <Text variant='sm' color='#6B7280' marginBottom={20}>
                        Separadores visuales
                    </Text>

                    <Text variant='xs' marginBottom={8}>
                        Divider delgado
                    </Text>
                    <Divider height={1} marginBottom={16} />

                    <Text variant='xs' marginBottom={8}>
                        Divider medio
                    </Text>
                    <Divider height={2} marginBottom={16} />

                    <Text variant='xs' marginBottom={8}>
                        Divider grueso
                    </Text>
                    <Divider height={4} marginBottom={40} />

                    {/* Footer */}
                    <View alignItems='center' marginTop={20}>
                        <Text variant='sm' color='#6B7280'>
                            Kairox UI Kit v1.0.0
                        </Text>
                        <Text variant='xs' color='#9CA3AF' marginTop={4}>
                            Hecho con ❤️ para React Native
                        </Text>
                    </View>
                </View>
            </BoxContent>
        </BoxContainer>
    );
};

export default HomeContainer;

