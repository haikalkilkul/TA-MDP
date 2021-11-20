import React from 'react';
import {View, Text, Alert, Image, Pressable} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMotorcycle, faUtensils, faCarSide, faBoxOpen, faWallet, faCartShopping, faFish, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const {ProfileStyle} = Style;

function Beranda() {
    const [data, setData] = React.useState('');
    //const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios
            .get('https://reqres.in/api/users/2')
            .then(res => setData(res.data.data))
            .catch(e => Alert.alert('Gagal!', e));
            return request;
        }
        fetchData();
    });

    return (
        <View style={ProfileStyle.container}>
            <View style={ProfileStyle.logoContainer}>
                <Image source={require('../stylessheets/png/logo.png')} style={ProfileStyle.logoImage}/>
            </View>

            <View style={ProfileStyle.headerContainer}>
                <Image source={{ 
                    uri: data.avatar, 
                    }} style={ProfileStyle.headerImage}
                />

                <Text style={ProfileStyle.headerTXT}>
                    {data.first_name + ' ' + data.last_name} </Text>

                <Text style={ProfileStyle.headerTXTDesc}>{data.email}</Text>
            </View>

            <View style={ProfileStyle.bodyContainer}>
                <Text style={ProfileStyle.headerTXT}>
                        {`Selamat Datang ${data.first_name} ${data.last_name}`}
                </Text>

                <Text style={ProfileStyle.headerTXT}> {`Selamat Menggunakan Aplikasi Ojek`} </Text>

                <View style={ProfileStyle.buttonContainer}>
                    <View style={ProfileStyle.button}>
                        <Pressable style={ProfileStyle.buttonIcon} >
                            <FontAwesomeIcon icon={faMotorcycle} size={40}/>
                        </Pressable>
                        <Text style={ProfileStyle.buttonText}>{'Ojek'}</Text>
                    </View>

                    <View style={ProfileStyle.button}>
                        <Pressable style={ProfileStyle.buttonIcon} >
                            <FontAwesomeIcon icon={faUtensils} size={40}/>
                        </Pressable>
                        <Text style={ProfileStyle.buttonText}>{'Makan'}</Text>
                    </View>

                    <View style={ProfileStyle.button}>
                        <Pressable style={ProfileStyle.buttonIcon} >
                            <FontAwesomeIcon icon={faCarSide} size={40}/>
                        </Pressable>
                        <Text style={ProfileStyle.buttonText}>{'Mobil'}</Text>
                    </View>

                    <View style={ProfileStyle.button}>
                        <Pressable style={ProfileStyle.buttonIcon} >
                            <FontAwesomeIcon icon={faBoxOpen} size={40}/>
                        </Pressable>
                        <Text style={ProfileStyle.buttonText}>{'Paket'}</Text>
                    </View>
                </View>

                <View style={ProfileStyle.buttonContainer}>
                    <View style={ProfileStyle.button}>
                        <Pressable style={ProfileStyle.buttonIcon} >
                            <FontAwesomeIcon icon={faWallet} size={40}/>
                        </Pressable>
                        <Text style={ProfileStyle.buttonText}>{'Dompet'}</Text>
                    </View>

                    <View style={ProfileStyle.button}>
                        <Pressable style={ProfileStyle.buttonIcon} >
                            <FontAwesomeIcon icon={faCartShopping} size={40}/>
                        </Pressable>
                        <Text style={ProfileStyle.buttonText}>{'Belanja'}</Text>
                    </View>

                    <View style={ProfileStyle.button}>
                        <Pressable style={ProfileStyle.buttonIcon} >
                            <FontAwesomeIcon icon={faFish} size={40}/>
                        </Pressable>
                        <Text style={ProfileStyle.buttonText}>{'Pasar'}</Text>
                    </View>

                    <View style={ProfileStyle.button}>
                        <Pressable style={ProfileStyle.buttonIcon} >
                            <FontAwesomeIcon icon={faEllipsis} size={40}/>
                        </Pressable>
                        <Text style={ProfileStyle.buttonText}>{'Lainnya'}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

}

export default Beranda;