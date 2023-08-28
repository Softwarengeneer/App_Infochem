import React, { Component, useMemo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MendeleevStyles } from './MendeleevStyles.js';
import Elementos from './MendeleevDB';
import bgColor from './getBgColorByGroupBlock.js'


export default class ListaElementos extends Component{

    getElementosByGroupBlock = (group, groupBlock) =>{
        return(
            Elementos.filter(elemento => (elemento.group == group) && (elemento.groupBlock == groupBlock))
        )
    }
    getElementosByGroupNumber = (groupNumber) =>{
        return(
            Elementos.filter(elemento => elemento.group == groupNumber)
        )
    }

    render(){

        const {navigation} = this.props;

        if(this.props.group != "3"){
            return(
                this.getElementosByGroupNumber(this.props.group).map((elemento) => {
                    return(
                        <View style={MendeleevStyles.coluna} key={elemento.atomicNumber}>
                            <TouchableOpacity style={[MendeleevStyles.cardElemento,{backgroundColor:bgColor(elemento)}]}
                                              onPress={()=> {
                                                  navigation.navigate('InfoElemento', {elemento: elemento})}}>
                                <Text style={MendeleevStyles.txtNatm}>{elemento.atomicNumber}</Text>
                                <Text style={MendeleevStyles.txtSymbol}>{elemento.symbol}</Text>

                            </TouchableOpacity>
                        </View>
                    )
                })
            )
        }
        else{
            return(
                this.getElementosByGroupBlock(this.props.group, this.props.groupBlock).map((elemento) => {
                    return(
                        <View style={MendeleevStyles.coluna} key={elemento.atomicNumber}>

                            <TouchableOpacity style={[MendeleevStyles.cardElemento,{backgroundColor:bgColor(elemento)}]}
                                              onPress={()=> {
                                                  navigation.navigate('InfoElemento', {elemento: elemento})}}>
                                <Text style={MendeleevStyles.txtNatm}>{elemento.atomicNumber}</Text>
                                <Text style={MendeleevStyles.txtSymbol}>{elemento.symbol}</Text>
                            </TouchableOpacity>

                        </View>
                    )
                })

            )
        }
    }
}
