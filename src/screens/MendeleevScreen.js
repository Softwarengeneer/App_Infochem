import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView } from 'react-native';
import { MendeleevStyles } from '../components/MendeleevStyles.js';
import Elementos from '../components/MendeleevDB';
import ListaElementos from '../components/ListaElementos.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import bgColor from '../components/getBgColorByGroupBlock.js'


export default function MendeleevScreen() {
    const navigation = useNavigation();

    return (
        <View style={MendeleevStyles.container}>
            <StatusBar style="dark" />
            <SafeAreaView>
                <View style={MendeleevStyles.containerInfoTabela}>
                    <View style={MendeleevStyles.containerGrupos}>

                        <View style={MendeleevStyles.typeGroup}>
                            <View style={[MendeleevStyles.cardGrupo, { backgroundColor: Elementos[0].cpkHexColor }]} />
                            <Text style={MendeleevStyles.txtNatm}> Неметалл </Text>
                        </View>

                        <View style={MendeleevStyles.typeGroup}>
                            <View style={[MendeleevStyles.cardGrupo, { backgroundColor: bgColor(Elementos[2]) }]} />
                            <Text style={MendeleevStyles.txtNatm}> Щелочной металл</Text>
                        </View>

                        <View style={MendeleevStyles.typeGroup}>
                            <View style={[MendeleevStyles.cardGrupo, { backgroundColor: bgColor(Elementos[1]) }]} />
                            <Text style={MendeleevStyles.txtNatm}> Инертный газ</Text>
                        </View>
                    </View>
                    <View style={MendeleevStyles.containerGrupos}>

                        <View style={MendeleevStyles.typeGroup}>
                            <View style={[MendeleevStyles.cardGrupo, { backgroundColor: bgColor(Elementos[3]) }]} />
                            <Text style={MendeleevStyles.txtNatm}> Щелочноземельный металл</Text>
                        </View>
                        <View style={MendeleevStyles.typeGroup}>
                            <View style={[MendeleevStyles.cardGrupo, { backgroundColor: bgColor(Elementos[8]) }]} />
                            <Text style={MendeleevStyles.txtNatm}> Галоген</Text>
                        </View>
                        <View style={MendeleevStyles.typeGroup}>
                            <View style={[MendeleevStyles.cardGrupo, { backgroundColor: bgColor(Elementos[20]) }]} />
                            <Text style={MendeleevStyles.txtNatm}> Полупроводник</Text>
                        </View>

                    </View>

                    <View style={MendeleevStyles.containerGrupos}>

                        <View style={MendeleevStyles.typeGroup}>
                            <View style={[MendeleevStyles.cardGrupo, { backgroundColor: bgColor(Elementos[3]) }]} />
                            <Text style={MendeleevStyles.txtNatm}> Щелочноземельный металл</Text>
                        </View>

                        <View style={MendeleevStyles.typeGroup}>
                            <View style={[MendeleevStyles.cardGrupo, { backgroundColor: bgColor(Elementos[4]) }]} />
                            <Text style={MendeleevStyles.txtNatm}> Полуметалл</Text>
                        </View>
                        <View style={MendeleevStyles.typeGroup}>
                            <View style={[MendeleevStyles.cardGrupo, { backgroundColor: bgColor(Elementos[12]) }]} />
                            <Text style={MendeleevStyles.txtNatm}> Переходный металл</Text>
                        </View>
                    </View>
                </View>
                <View style={MendeleevStyles.containerInfoTabela}>
                    <View style={MendeleevStyles.label}>
                        <Text style={MendeleevStyles.txtLabel}>1</Text>
                        <Text style={MendeleevStyles.txtLabel}>2</Text>
                        <Text style={MendeleevStyles.txtLabel}>3</Text>
                        <Text style={MendeleevStyles.txtLabel}>4</Text>
                        <Text style={MendeleevStyles.txtLabel}>5</Text>
                        <Text style={MendeleevStyles.txtLabel}>6</Text>
                        <Text style={MendeleevStyles.txtLabel}>7</Text>
                    </View>

                    <ScrollView horizontal={true} alwaysBounceHorizontal={true} maximumZoomScale={2.0}>
                        <View style={MendeleevStyles.sviewContainer}>
                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>1A</Text>
                                <ListaElementos group='1' navigation={navigation} />
                            </View>
                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>2A</Text>
                                <ListaElementos group="2" navigation={navigation} />
                            </View>
                            <View>

                                <View>
                                    <Text style={MendeleevStyles.txtLabelGroup}>3B</Text>
                                    <ListaElementos group='3' groupBlock="Полупроводник" navigation={navigation} />
                                </View>

                                <View style={MendeleevStyles.coluna}>
                                    <View style={[MendeleevStyles.cardElemento, { backgroundColor: bgColor(Elementos[110]) }]}>
                                        <Text style={MendeleevStyles.txtSymbol}> 57 - 71 </Text>
                                    </View>
                                </View>

                                <View style={MendeleevStyles.coluna}>
                                    <View style={[MendeleevStyles.cardElemento, { backgroundColor: bgColor(Elementos[110]) }]}>
                                        <Text style={MendeleevStyles.txtSymbol}> 89 - 103 </Text>
                                    </View>
                                </View>

                            </View>

                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>4B</Text>
                                <ListaElementos group='4' navigation={navigation} />
                            </View>

                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>5B</Text>
                                <ListaElementos group='5' navigation={navigation} />
                            </View>

                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>6B</Text>
                                <ListaElementos group='6' navigation={navigation} />
                            </View>

                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>7B</Text>
                                <ListaElementos group='7' navigation={navigation} />
                            </View>

                            <View style={[MendeleevStyles.flac]}>

                                <View style={MendeleevStyles.f8B}>
                                    <ListaElementos group='8' navigation={navigation} />
                                </View>

                                <View style={MendeleevStyles.f8B}>
                                    <Text style={MendeleevStyles.txtLabelGroup}>8B</Text>
                                    <ListaElementos group='9' navigation={navigation} />
                                </View>

                                <View style={MendeleevStyles.f8B}>
                                    <ListaElementos group='10' navigation={navigation} />
                                </View>

                            </View>

                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>1B</Text>
                                <ListaElementos group='11' navigation={navigation} />
                            </View>
                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>2B</Text>
                                <ListaElementos group='12' navigation={navigation} />
                            </View>

                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>3A</Text>
                                <ListaElementos group='13' navigation={navigation} />
                            </View>
                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>4A</Text>
                                <ListaElementos group='14' navigation={navigation} />
                            </View>
                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>5A</Text>
                                <ListaElementos group='15' navigation={navigation} />
                            </View>
                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>6A</Text>
                                <ListaElementos group='16' navigation={navigation} />
                            </View>
                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>7A</Text>
                                <ListaElementos group='17' navigation={navigation} />
                            </View>
                            <View>
                                <Text style={MendeleevStyles.txtLabelGroup}>8A</Text>
                                <ListaElementos group='18' navigation={navigation} />
                            </View>

                        </View>

                    </ScrollView>
                </View>
                <ScrollView horizontal={true} alwaysBounceHorizontal={true} maximumZoomScale={2.0}>
                    <View style={MendeleevStyles.gruposLAC}>
                        <View style={MendeleevStyles.flac}>
                            <Text style={[MendeleevStyles.txtLabel, {alignSelf:'center'}]}> Лантанидs </Text>
                            <ListaElementos group='3' groupBlock="Лантанид" navigation={navigation} />
                        </View>
                        <View style={MendeleevStyles.flac}>
                            <Text style={[MendeleevStyles.txtLabel, {alignSelf:'center'}]}> Actinídios </Text>
                            <ListaElementos group='3' groupBlock="Актинид" navigation={navigation} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
