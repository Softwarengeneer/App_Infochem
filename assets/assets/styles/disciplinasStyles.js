import { StyleSheet } from 'react-native';

export const disciplinaStyles = StyleSheet.create({
  container:{
    backgroundColor: '#fafafa',
    flex:1
  },
  logoPrincipal:{
    paddingTop:80,
  },
  card:{
    backgroundColor: '#fafafa',
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    paddingLeft:15,
    paddingRight: 15,
  },
  imgLogo:{
    maxWidth:310,
    height:250,
    alignSelf:'center'
  },
  txtTitulo:{
    marginLeft:20,
    marginTop:12,
    marginBottom:8,
    fontSize:34,

  },
  txtDescricao:{
    fontSize:12,
    marginBottom:5,
    textAlign:'justify',

  },
  listacards:{
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom:10,
    paddingTop:20,

  },
  headerImg:{
    backgroundColor:'#04c6cf'
  },
  cardInterno:{
    backgroundColor: '#A4ECEF',
    opacity:0.9,
    width: 110,
    height: 110,
    margin: 8,
    alignItems: 'center',
    justifyContent:'center'
  },
  cardSubtopicos:{
    backgroundColor: '#04c6cf',
    width: 300,
    height: 80,
    margin: 15,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  txtTituloSubtopico:{
    fontSize: 19,
    marginBottom:7,
    marginTop:10,
    color:'white'
  },
  txtTituloSubtopicoPreto:{
    fontSize: 19,
    marginBottom:7,
    marginTop:10,
    color:'black',
    textAlign:'center'
  },
  ImgIcones:{
    alignContent:'stretch',
    maxWidth:60,
    maxHeight: 50
  },
  txtTituloDisciplina:{
    fontSize: 50,
    marginTop: '22%',
    color: '#00858b',
  },

})
