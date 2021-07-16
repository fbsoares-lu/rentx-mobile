import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import Logo from '../../assets/logo.svg';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from './styles';


export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  };

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch(error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

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
      { isLoading ? <Load/> :
        <CarList
          data={cars}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => 
            <Car 
              data={item}
              onPress={() => handleCarDetails(item)}
            />}
        />
      }
    </Container>
  );
}