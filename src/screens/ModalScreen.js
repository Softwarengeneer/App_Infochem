import React, { useEffect, useState} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from '../../assets/assets/styles/conteudoStyles.js';
import Icons from '../components/importIcons.js'

export default function FetchElemento(props) {

  const [elemento] = useState(props.route.params.elemento);
  const [IcoStandardState, setIcoStandardState] = useState('');


  useEffect(() => {
    switch (elemento.standardState) {
      case 'Газообразный':
        return setIcoStandardState(require("../../assets/assets/images/icons/gasoso.png"));
      case 'Твердый':
        return setIcoStandardState(require("../../assets/assets/images/icons/solido.png"));
      case 'Жидкий':
        return setIcoStandardState(require("../../assets/assets/images/icons/liquido.png"));
      case 'Неизвестно':
        return setIcoStandardState(require("../../assets/assets/images/icons/desconhecido.png"));
    }

  })

  return (

    <ScrollView style={styles.container}>
      <View>
        <View style={styles.title}>
          <Text style={styles.txtTitle}>{elemento.name}</Text>
        </View>
        <View style={styles.circlesView}>
          <View style={styles.circleCard}>
            <View style={styles.circle}>
              <Image style={styles.imgCircle} source={Icons[9]} />
            </View>
            <Text style={styles.txtValueTitle}>{elemento.atomicMass}</Text>
            <Text style={styles.txtValueSubtitle}>Атомная масса</Text>
          </View>
          <View style={styles.circleCard}>
            <View style={[styles.circle, {borderColor:'#a2dfd9'}]}>
              <Image style={[styles.imgPrincipalCircle]} source={Icons[10]} loadingIndicatorSource={'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'}/>
            </View>
            <Text style={styles.txtValueTitle}>{elemento.atomicNumber}</Text>
            <Text style={styles.txtValueSubtitle}>Порядковый номер</Text>
          </View>
          <View style={styles.circleCard}>
            <View style={styles.circle}>
              <Image style={styles.imgCircle} source={IcoStandardState} />
            </View>
            <Text style={styles.txtValueTitle}>{elemento.standardState}</Text>
            <Text style={styles.txtValueSubtitle}>Агрегатное состояние</Text>
          </View>


        </View>
        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[0]} />
            <Text style={styles.txtListTitle}>Электронная конфигурация</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues} adjustsFontSizeToFit={true}>{elemento.electronicConfiguration}</Text>
          </View>
        </View>
        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[1]} />
            <Text style={styles.txtListTitle}>Радиус атома [pm]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.atomicRadius}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[2]} />
            <Text style={styles.txtListTitle}>Температура кипения [K]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.boilingPoint}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[3]} />
            <Text style={styles.txtListTitle}>Температура плавления [K]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.meltingPoint}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[4]} />
            <Text style={styles.txtListTitle}>Степени окисления</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.oxidationStates}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[5]} />
            <Text style={styles.txtListTitle}>Электроотрицательность</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.electronegativity}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[6]} />
            <Text style={styles.txtListTitle}>Плотность [g/cm³]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.density}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[7]} />
            <Text style={styles.txtListTitle}> Энергия ионизации [KJ/mol]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.ionizationEnergy}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[8]} />
            <Text style={styles.txtListTitle}>Год открытия</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.yearDiscovered}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
