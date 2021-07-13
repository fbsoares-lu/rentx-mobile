import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer
} from './styles';
import { Button } from '../../components/Button';


export function CarDetails(){
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('Scheduling')
  }

  return(
    <Container>
      <Header>
        <BackButton onPress={() => navigation.navigate('Home')}/>
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={['https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="380Km/h" icon={accelerationSvg} />
          <Accessory name="380Km/h" icon={forceSvg} />
          <Accessory name="380Km/h" icon={gasolineSvg} />
          <Accessory name="380Km/h" icon={exchangeSvg} />
          <Accessory name="380Km/h" icon={peopleSvg} />
        </Accessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado
          na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button 
          title="Escolher período de aluguel" 
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}