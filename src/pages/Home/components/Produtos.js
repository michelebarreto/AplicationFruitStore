import React, { useReducer, useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Estrelas from '../../../components/Estrelas';

const distanciaEmMetros = (distancia) => {
  return `${distancia}m`;
}


export default function Produtos({ nome, imagem, distancia, estrelas }) {
  const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado,
    false
  );

  const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]);

  return (
    <TouchableOpacity style={style.cards}
      onPress={inverterSelecionado}
    >
      <Image style={style.imag} source={imagem} accessibilityLabel={nome} />
      <View style={style.informacoes}>
        <View>
          <Text style={style.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={style.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  cards: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4,
  },
  imag: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
