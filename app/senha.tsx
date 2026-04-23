import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import styles from './css/senhaCss';
import { Link } from 'expo-router';

export default function Senha() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../assets/image.png")}></Image>
      </View>
      <View style={styles.form}>
        <Text style={styles.esquerda}>Login</Text>
        <TextInput placeholder='Insira seu CPF' style={styles.input} />
        <Text style={styles.esquerda}>Crie uma nova senha</Text>
        <TextInput placeholder='Insira sua senha' style={styles.input} />
      
      </View>
      <View style={styles.btn}>
        <Link href={'/login'} >
          <Text style={{color:'white'}}>SALVAR</Text>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}