import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Pages from '../pages';
import {faHome, faUser, faBolt, faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const NavStack = createBottomTabNavigator();

function StackNavBar() {

    return (
        <NavStack.Navigator>
        <NavStack.Screen
            name="Beranda"
            component={Pages.HomePages}
            options={{
                headerTitle: 'Beranda',
                tabBarIcon: ({color}) => {
                    return <FontAwesomeIcon icon={faHome} size={20}
                    color={color} />;
                },
            }}
        />

        <NavStack.Screen
            name="Berjalan"
            component={Pages.RunningPages}
            options={{
                headerTitle: 'Running',
                tabBarIcon: ({color}) => {
                    return <FontAwesomeIcon icon={faBolt} size={20}
                    color={color} />;
                },
            }}
        />

        <NavStack.Screen
            name="Riwayat"
            component={Pages.HistoryPages}
            options={{
                headerTitle: 'History',
                tabBarIcon: ({color}) => {
                    return <FontAwesomeIcon icon={faClockRotateLeft} size={20}
                    color={color} />;
                },
            }}
        />

        <NavStack.Screen
            name="Akun"
            component={Pages.ProfilePages}
            options={{
                headerTitle: 'Profile',
                tabBarIcon: ({color}) => {
                    return <FontAwesomeIcon icon={faUser} size={20}
                    color={color} />;
                },
            }}
        />
        </NavStack.Navigator>
        );
}
export default StackNavBar;