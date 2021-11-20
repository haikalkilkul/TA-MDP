import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Style from '../stylessheets';

const {HomeStyle} = Style;

function HomePages() {
    const data = [
        {
            id: 1,
            nama: 'Muhammad Ilzam Muhtaromi',
            nim: '21120119120027',
            kelompok: '21',
        },
        {
            id: 2,
            nama: 'Muhammad Haikal Ash Shidqi',
            nim: '21120119130081',
            kelompok: '21',
        },
        {
            id: 3,
            nama: 'Bagus Muhamad Iqbal',
            nim: '21120119120013',
            kelompok: '21',
        },
        {
            id: 4,
            nama: 'Muhammad Hanif Atthariq',
            nim: '21120117140028',
            kelompok: '21',
        },
    ];

    const ListItemNama = dataPassing => {
        return (
            <View
                style={
                    dataPassing.dataNama.id % 2 === 1
                    ? HomeStyle.itemListContainerGanjil
                    : HomeStyle.itemListContainerGenap
                }>
                <View>
                    <View style={
                        dataPassing.dataNama.id % 2 === 1
                        ? HomeStyle.itemListGarisGanjil
                        : HomeStyle.itemListGarisGenap
                    } />
                </View>
                <View style={HomeStyle.itemListContent}>
                    <Text style={HomeStyle.itemListTXT}>
                        {'Nama : ' + dataPassing.dataNama.nama}
                    </Text>
                    <Text style={HomeStyle.itemListTXT}>
                        {'NIM : ' + dataPassing.dataNama.nim}
                    </Text>
                    <Text style={HomeStyle.itemListTXT}>
                        {'Kelompok : ' + dataPassing.dataNama.kelompok}
                    </Text>
                </View>
            </View>
        );
    };
 
    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.headerContainer}>
                <Image
                    source={{
                        uri: 'https://bit.ly/39BPh9p',
                    }}
                    style={HomeStyle.headerImage}
                />
                <Text style={HomeStyle.headerTXT}>
                    PRAKTIKUM MDP MODUL 4 KELOMPOK 21
                </Text>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                legacyImplementation={false}
                data={data}
                renderItem={({item}) => <ListItemNama dataNama={item} />}
                keyExtractor={item => item.id}
                style={HomeStyle.flatlist}
            />
        </View>
    );
}
export default HomePages;