import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
   marginLeft:21,
   marginRight: 21,
   borderColor: '#1b3fa2',


  },
  listacards:{
    marginTop: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 100
  },
  card: {
    backgroundColor: '#04c6cf',
    width: 150,
    height: 150,
    margin: 15,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  ImgIcones:{
    maxWidth: 90,
    maxHeight: 90
  },
  TextTitulo:{
    fontSize: 20,
    textAlign: 'center',
    color: '#00858b',
  },
  TxtTituloHeader:{
    fontSize: 40,
    color: '#FFFDF0',
    fontFamily:  'IntroScript',
  },
  txtTituloDisciplina:{
    fontSize: 50,
    color: '#00858b',
  },
  txtTituloSubtopico:{
    fontSize: 30,
    color: '#fffdf0',
  }
});
