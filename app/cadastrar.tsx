import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import styles from './css/cadastrarCss';
import { Link } from 'expo-router';

export default function Cadastrar() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../assets/image.png")}></Image>
      </View>
      <View style={styles.form}>
        <Text>Crie seu cadastro</Text>
        <Text style={styles.esquerda}>Nome</Text>
        <TextInput placeholder='Insira seu nome' style={styles.input} />
        <Text style={styles.esquerda}>Sobrenome</Text>
        <TextInput placeholder='Insira seu sobrenome' style={styles.input} />
         <Text style={styles.esquerda}>CPF</Text>
        <TextInput placeholder='Insira seu CPF' style={styles.input} />
         <Text style={styles.esquerda}>Crie uma senha</Text>
        <TextInput placeholder='Insira sua senha' style={styles.input} />
      </View>
      <View style={styles.btn}>
        <Link href={'/login'} >
          <Text style={{color:'white'}}>CRIAR</Text>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}