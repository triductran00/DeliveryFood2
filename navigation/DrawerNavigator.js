import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { colors } from "../global/styles";
import BusinessConsoleScreen from '../screens/BusinessConsole';
import DrawerContent from '../Components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return(
        <Drawer.Navigator
                drawerContent  = {props =><DrawerContent {...props} /> }
        >

            <Drawer.Screen 
                name = "RootClientTabs"
                component = {RootClientTabs}
                options = {{
                    headerShown:false,
                    title:'Home',
                    drawerIcon: ({focucced, size}) =>(
                        <Icon 
                            type = "material-community"
                            name = "home"
                            color = {focucced ? '#7cc' :colors.grey2}
                            size = {size}
                        />
                    )
                }}
            />

            <Drawer.Screen 
                    name = "Business consoleScreen"
                    component ={BusinessConsoleScreen}
                    options = {{
                        title:'Quản lý kinh doanh',
                        drawerIcon: ({focucced, size}) =>(
                            <Icon 
                                type = "material"
                                name = "business"
                                color = {focucced ? '#7cc' :colors.grey2}
                                size = {size}
                            />
                        )
                    }}
                />
        </Drawer.Navigator>
    )
}