import { StyleSheet } from 'react-native';

export const foStyles = StyleSheet.create({
    container: {
        marginLeft: 21,
        marginRight: 21,
        marginLeft:20
    },
    principal:{
        paddingBottom: 40
    },
    titulo:{
        color:'#00484B',
        fontSize: 34,
        marginTop:8,
        marginBottom:3,

    },
    subtitulo:{
        color:"#00484B",
        fontSize:23,
        marginTop:10,
        marginBottom:2,
    },
    txtPropriedades:{
       fontSize: 15,
       color:"#00484B",
       textAlign:'justify',
       paddingTop: 10
    },
    img:{
        marginTop:12,
        marginBottom:10,
        maxHeight:70,
        maxWidth:500,
        alignSelf:'center',
        resizeMode:'contain'
    },
    img2:{
        marginTop:12,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        height:80,
        alignSelf:'center',
        resizeMode:'contain',

    },
    curiosidade:{
        marginTop:15,
        backgroundColor:'#c6e8e9',
        borderBottomLeftRadius:15,
        borderTopLeftRadius:20,
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
        flexDirection:'row',
        alignItems:'center',
        padding:12,

    },
    viewtxtCuriosidade:{
        flexShrink:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    txtCuriosidade:{
        textAlign:'left',
        marginLeft:10,
        fontSize: 11,
        color:"#00484B",
    },
    txtLegenda:{
        textAlign:'center',
        marginLeft:10,
        fontSize: 11,
        color:"#00484B",

    },
    imgCuriosidade:{
        maxHeight:40,
        maxWidth:40,
    },
    images:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    txtNomenclatura:{
        textAlign:'center',
        color:'#FF8000',
        fontSize: 12,
        marginTop:8,
        marginBottom:15,
    }

})
