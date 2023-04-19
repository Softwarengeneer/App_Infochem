import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {AppStyles} from '../AppStyles';

function WelcomeScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    tryToLoginFirst();
  }, []);

  async function tryToLoginFirst() {
    setIsLoading(false);
  }

  if (isLoading === true) {
    return (
      <ActivityIndicator
        style={styles.spinner}
        size="large"
        color={AppStyles.color.tint}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать в первую версию приложения)</Text>
      <TouchableOpacity
        style={styles.loginContainer}
        onPress={() => navigation.navigate('Войти')}>
        <Text style={styles.loginText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupContainer}
        onPress={() => navigation.navigate('Зарегистрироваться')}>
        <Text style={styles.signupText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  signupContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 15,
  },
  signupText: {
    color: AppStyles.color.tint,
  },
  spinner: {
    marginTop: 200,
  },
});

export default WelcomeScreen;
