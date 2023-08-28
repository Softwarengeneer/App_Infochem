import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image, View, Text } from 'react-native';

import HomeScreen from '../../screens/Home.js'
import Disciplina from '../../screens/DisciplinaScreen.js'
import TabelaPeriodica from '../../screens/TabelaPeriodicaScreen.js';
import InfoElemento from '../../screens/ModalScreen.js';
import TopicoScreen from '../../screens/TopicoScreen.js';
import SubtopicoScreen from '../../screens/disciplinas/SubtopicoScreen.js';

export default function MainRoutes() {

  function LogoTitle() {
    return (
      <Image style={styles.ImgIcone1}
        source={require('../images/iconeapp.png')} />
    );
  }

  function MyLogoTitle() {
    return (
      <View style={styles.containerLogo}>
        <Text style={styles.txtLogo}>Quimi</Text>
        <Text style={[styles.txtLogo, { color: '#ff4985' }]}>Cao</Text>
      </View>
    );
  }

  const HomeStack = createNativeStackNavigator();


  function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{
        title: '',
        headerRight: (props) => <LogoTitle {...props} />,
        headerTransparent: true,
      }}
      >
        <HomeStack.Screen name="TelaInicial" component={HomeScreen} />
        <HomeStack.Screen name='TabelaPeriodica' component={TabelaPeriodica} />
        <HomeStack.Screen name="SubtopicoScreen" component={SubtopicoScreen} options={
          {
            headerTintColor:"#fff",
            headerBackTitleVisible:false,
            headerRight: () => null,
          }
        } />
        <HomeStack.Screen name="Disciplina" component={Disciplina} options={
          {
            headerRight: () => <MyLogoTitle />,
          }
        } />
        <HomeStack.Screen name="TopicoScreen" component={TopicoScreen} options={
          {
            headerRight: () => <MyLogoTitle />,
          }
        } />
        
        <HomeStack.Group
          screenOptions={() => ({
            presentation: 'modal',
            headerRight: () => null,

          })}>
          <HomeStack.Screen name="InfoElemento" component={InfoElemento} />
          
        </HomeStack.Group>

      </HomeStack.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ImgIcone1: {
      maxWidth: 175,
      maxHeight: 45,
      borderRadius: 12,
    },
    txtLogo: {
      fontFamily: 'IntroScript',
      fontSize: 38,
    },
    containerLogo: {
      paddingLeft: 30,
      paddingRight: 13,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },



  });

  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>

  );
}
