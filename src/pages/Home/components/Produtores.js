import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Produtos from './Produtos';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={style.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtos {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}
const style = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
