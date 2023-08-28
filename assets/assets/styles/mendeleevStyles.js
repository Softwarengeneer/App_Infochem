import { StyleSheet } from 'react-native';

export const mendeleevStyles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingRight: 5,
    flex: 1,
    marginBottom: 50,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#FFFDF0'
  },
  sviewContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',

  },
  cardElemento: {
    width: 50,
    height: 50,
    margin: 1,
    borderRadius: 7,
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  txtNatm: {
    fontSize: 12,
  },
  txtSymbol: {
    fontSize: 20,
  },
  f8B: {
    maxWidth: 4 * 52,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  gruposLAC: {
    paddingTop: 30,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'space-around',
  },
  flac: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  coluna: {
    flexWrap: 'wrap',
  },
  containerInfoTabela: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    flexWrap: 'wrap',
    width: '4%',
    justifyContent: 'space-around',
    marginLeft: 5
  },
  txtLabel: {
    color: '#00858B',
  },
  txtLabelGroup: {
    color: '#00858B',
    textAlign: 'center'
  },
  containerGrupos: {
    flexDirection: 'column',
    marginBottom: '5%',
  },
  typeGroup: {
    marginRight: 8,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cardGrupo: {
    width: 25,
    height: 25,
    margin: 1,
    borderRadius: 7,
  },

})
