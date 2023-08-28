import React from "react";
import Header from "./common/Header";
import Carousel from "./common/Carousel";
import Services from "./common/Services";
import Info from "./common/Info";
import Clients from "./common/Clients";

const carousel_items = [
  {
    image: '../imgs/me-1.jpg',
    button: 'Наша презентация',
    text: 'Бухгалтерские услуги в Санкт-Петербурге',
  },
  {
    image: '../imgs/me-2.jpg',
    button: '',
    text: 'Что скрывает за своими очками красивый мужчина?',
  },
  {
    image: '../imgs/me-3.jpg',
    button: '',
    text: '',
  },
  {
    image: '../imgs/me-4.jpg',
    button: '',
    text: 'Возьмите меня на работу!',
  },
];
const clients_items = [
  {
    images: [
      '../imgs/client.svg',
      '../imgs/client.svg',
      '../imgs/client.svg',
      '../imgs/client.svg',
    ] 
  },
  {
    images: [
      '../imgs/client.svg',
      '../imgs/client.svg',
      '../imgs/client.svg',
    ] 
  },
  {
    images: [
      '../imgs/client.svg',
      '../imgs/client.svg',
    ] 
  },
  {
    images: [
      '../imgs/client.svg',
    ] 
  },
]

function App() {
  return (
    <div className="App">
      <Header /> 
      <Carousel items={carousel_items} />
      <Services history="Наши услуги" title="Мы специализируемся" />
      <Info history="О нас" title="Компания" name="ИвановПром" />
      <Clients items={clients_items} />
    </div>
  );
}

export default App;
