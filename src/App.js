import React from "react";
import Header from "./common/Header";
import Carousel from "./common/Carousel";

const items = [
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

function App() {
  return (
    <div className="App">
      <Header /> 
      <Carousel items={items} />
    </div>
  );
}

export default App;
