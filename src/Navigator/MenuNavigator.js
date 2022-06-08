import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ayuda from '../screens/Ayuda';
import Configuracion from '../screens/Configuracion';
import Home from '../screens/Home';
import Privacidad from '../screens/Privacidad';
import Reciclar from '../screens/Reciclar';
import Usuario from '../screens/Usuario';

const Drawer = createDrawerNavigator();

const MenuNavigator=()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Usuario" component={Usuario}/>
                <Drawer.Screen name="Localizacion" component={Localizacion}/>
                <Drawer.Screen name="Reciclar" component={Reciclar}/>
                <Drawer.Screen name="Ayuda" component={Ayuda}/>
                <Drawer.Screen name="Configuracion" component={Configuracion}/>
                <Drawer.Screen name="Privacidad" component={Privacidad}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default MenuNavigator;