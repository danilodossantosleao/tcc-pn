// src/screens/NoticiasScreen.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const NoticiasScreen = () => {
  const noticias = [
    {
      id: 1,
      titulo: 'Grande Vitória no Campeonato!',
      descricao: 'O Real Cangaíba venceu o time adversário com um placar de 3-1 no último domingo.',
      imagem: require('../../assets/img4.jpg'),
    },
    {
      id: 2,
      titulo: 'Novo Patrocinador Anunciado',
      descricao: 'Temos o prazer de anunciar que a empresa XYZ é a nova patrocinadora oficial do Real Cangaíba.',
      imagem: require('../../assets/img11.jpg'),
    },
    {
      id: 3,
      titulo: 'Treino Aberto ao Público',
      descricao: 'Venha assistir ao nosso treino aberto ao público na próxima quarta-feira às 16h no estádio.',
      imagem: require('../../assets/img10.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {noticias.map((noticia) => (
        <View key={noticia.id} style={styles.card}>
          <Image source={noticia.imagem} style={styles.imagem} />
          <Text style={styles.titulo}>{noticia.titulo}</Text>
          <Text style={styles.descricao}>{noticia.descricao}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  descricao: {
    fontSize: 16,
    color: 'gray',
  },
});

export default NoticiasScreen;
