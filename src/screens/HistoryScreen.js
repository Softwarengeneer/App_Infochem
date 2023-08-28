import React, {useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect, useSelector} from 'react-redux';
import { AppStyles} from '../AppStyles';
import {Configuration} from '../Configuration';

function HistoryScreen({navigation}) {
    const auth = useSelector((state) => state.auth);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'История поиска',
        });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Ваша история поиска:</Text>
            <View style={styles.rectangles}/>
            <View style={styles.rectangles2}/>
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: Configuration.home.listing_item.offset,
    },
    title: {
        color: AppStyles.color.title,
        fontSize: 25,
        alignItems:"center",
    },
    userPhoto: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 5,
    },

    rectangles: {
        align: "center",
        width: 350,
        height: 150,
        borderWidth: 5,
        borderRadius: 25,
        borderColor: "black",
        marginBottom: 150
    },
    rectangles2: {
        align: "center",
        width: 350,
        height: 150,
        borderWidth: 5,
        borderRadius: 25,
        borderColor: "black",
        marginBottom: 130
    }

});

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(HistoryScreen);
