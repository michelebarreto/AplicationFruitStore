
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import logo from '../../../assets/logo.png';
import { carregaTopo } from '../../../servicos/carregaDados';



class Topo extends React.Component {
    state = {
        mockTopo: {
            welcomeName: '',
            subTitle:''
    }
}

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ mockTopo: retorno });
    }
    componentDidMount() {
        this.atualizaTopo();
    }


    render() {
        return <View style={style.topo}>
            <Image source={logo} style={style.image} />
            <Text style={style.tituloTopo}>{this.state.mockTopo.welcomeName} </Text>
            <Text style={style.subTitulo}>{this.state.mockTopo.subTitle} </Text>

        </View>
    }
}

const style = StyleSheet.create({
    topo: {
        backgroundColor: '#f6f6f6',
        padding: 16,
    },
    image: {
        width: 70,
        height: 28
    },
    tituloTopo: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color:'#464646'

    },
    subTitulo: {
        fontSize: 16,
        lineHeight: 26,
        color: '#a3a3a3'
    }
})

export default Topo;