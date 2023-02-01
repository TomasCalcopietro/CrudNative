import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {StyleSheet} from 'react-native';
//import {Button} from 'react-native-paper';
import {Icon as Icon2} from 'react-native-vector-icons/AntDesign';

const BarraSuperior = ({navigation, route}) => {
  const handlePress = () => {
    navigation.navigate('NuevoCliente');
  };

  return (
    <Icon.Button
      style={styles.icon}
      name="plus-circle"
      color="#FFF"
      onPress={() => handlePress()}>
      Cliente
    </Icon.Button>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#1774F2',
  },
});

export default BarraSuperior;
