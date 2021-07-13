import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { Car } from '../../components/Car';

import Logo from '../../assets/logo.svg';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from './styles';

export function Home(){
  const navigation = useNavigation();

  const carData = {
    brand: 'Porche',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 340,
    },
    thumbnail: 'https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png'
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  };

  return(
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1,2,3,4,5,6,7,8]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => 
          <Car 
            data={carData}
            onPress={handleCarDetails}
          />}
      />
    </Container>
  );
}