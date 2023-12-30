import { View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '@/constants/Colors';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const auth = FIREBASE_AUTH;

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const signIn = async () => {
    setLoading(true);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (error: any) {
        console.log(error);
        alert('Đăng nhập thất bại: ' + error.message);
    } finally {
        setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert('Đăng ký thành công!!!');
    } catch (error: any) {
        console.log(error);
        alert('Đăng ký thất bại: ' + error.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <View>
      <KeyboardAvoidingView behavior='padding'>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={hidePassword}
            value={password}
            style={styles.passwordInput}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
            <Icon name={hidePassword ? 'eye-slash' : 'eye'} size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#f7442e" /> 
        ) : (
          <>
            <Button title="Đăng nhập" onPress={signIn} />
            <Button title="Đăng ký" onPress={signUp} /> 
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({

  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 4,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  passwordInput: {
    flex: 1,
    height: 50,
    padding: 10,
  },
  icon: {
    padding: 10,
  }
});
