import { View, StyleSheet, TextInput, Button, KeyboardAvoidingView, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';

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
        alert('Đăng nhập thất bại' + '\n' + error.message);
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
        alert('Đăng ký thất bại' + '\n' + error.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
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
            <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={20} color="#f7442e" />
          </TouchableOpacity>
        </View>

        <View style = {{marginHorizontal:100, marginTop:10, flexDirection: 'column', justifyContent: 'center'}}>
          {loading ? (
            <ActivityIndicator size="large" color="#f7442e" /> 
          ) : (
            <>
                <View style={{ marginBottom: 10 }}>
                    <Button title="Đăng nhập" onPress={signIn} color="#f7442e" />
                </View>

                <View>
                  <Button title="Đăng ký" onPress={signUp} color="#f7442e"/> 
                </View>
            </>
          )} 
          </View>
        </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
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