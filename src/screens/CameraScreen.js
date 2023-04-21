import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera'
import {TouchableOpacity} from "react-native-gesture-handler";
import {connect} from "react-redux";
const CameraScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Camera',
        });
    }, []);
    return (
        <View style={styles.container}>
            <Camera style={styles.camera}>
                <Text style={styles.comment}>Поместите формулу в белое окошко</Text>
                <View style={styles.formula}></View>
                <TouchableOpacity onPress={()=> {}} style={styles.snapContainer}>
                    <Text style={styles.snap}>  Щелк</Text>
                </TouchableOpacity>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    snap: {
        color: '#fff'
    },
    comment: {
        alignItems: "center",
        color: "white",
        marginBottom: 70
    },
    formula: {
        align: "center",
        width: 310,
        height: 270,
        borderWidth: 5,
        borderColor: "white",
        marginBottom: 150
    },
    camera:{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",

    },
    snapContainer: {
        borderWidth: 8,
        borderColor: "#ff0000",
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        marginBottom: 20,

    },
    }

);
const mapStateToProps = (state) => ({
    user: state.auth.user,
});
export default connect(mapStateToProps)(CameraScreen);
