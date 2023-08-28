import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fafafa',
    paddingTop:20
  },
  title:{
    alignItems: 'center',
    marginBottom: 30
  },
  txtTitle:{
    fontSize: 30
  },
  circlesView:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingBottom:15

  },
  circleCard:{
    alignItems:'center'
  },
  circle:{
    borderColor:'#2ca2c2',
    borderRadius: 60,
    borderWidth:4
  },
  imgCircle:{
    width: 60,
    height:60
  },
  imgPrincipalCircle:{
    width: 80,
    height:80,
    borderRadius:50
  },
  txtValueTitle:{
  },
  txtValueSubtitle:{
  },
  cardList: {
    borderColor: '#e6eee6',
    borderTopWidth:1,
    borderBottomWidth:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingBottom:10

  },
  txtListTitle:{
    fontSize:15,
    marginLeft:10,
  },
  descriptionItems:{
    marginLeft:15,
    alignItems:'center',
    flexDirection:'row',
  },
  valuesList:{
    marginRight: 20,
    justifyContent:'center'
  },
  txtValues:{
    fontSize:15,
    color:'#83919c',
  },
  listIcon:{
    width:40,
    height:40
  }

});
