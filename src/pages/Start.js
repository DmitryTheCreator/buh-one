import React from "react";
import Carousel from "../common/Carousel";
import Services from "../common/Services";
import Info from "../common/Info";
import Clients from "../common/Clients";
import Reviews from "../common/Reviews";
import Contacts from "../common/Contacts";

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
const reviews_items = [
  {
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в' +
          'печати и вэб-дизайне. Lorem Ipsum является стандартной ' +
          '"рыбой" для текстов на латинице с начала XVI века. В то ' +
          'время некий безымянный печатник создал большую коллекцию ' +
          'размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. '+
          'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
    image: '../imgs/review-author.png',
    name: 'Екатерина Иванова',
    company: 'Директор ООО “Раз-два”',
  },
  {
    text: 'Потрясающий сервис. Я влюбился с первого взгляда ' +
          'в дизайн и структуру этого божественного творения. Мне как '+
          'завидному и омерзительно красивому мужчине крайне важно удобство, '+
          'чем изобилует данный сайт. На разработчика этого сервиса мне не '+
          'жалко было бы и свою квартиру переписать!',
    image: '../imgs/me-4.jpg',
    name: 'Дмитрий Заморев',
    company: 'Безработный',
  },
  {
    text: 'Хочу выразить искреннюю благодарность за создание такого ' +
          'роскошного пространства, где мы, поклонники бизнеса и ' +
          'финансового мира, можем наслаждаться великолепной палитрой ' +
          'информации, предоставляемой вашим порталом. Ваша работа — ' +
          'это истинное произведение искусства в виртуальной среде. ' +
          'Каждый раз, заходя на вашу платформу, я ощущаю, что попадаю ' +
          'в мир утонченности и элегантности, который настолько характерен '+
          'для бренда BuhOne.',
    image: '../imgs/me-2.jpg',
    name: 'Обворожительный мужчина',
    company: 'Журнал Forbes',
  },
  {
    text: 'Привет, друзья! Знаете, когда я начинал свой путь в мире актерства, ' +
          'я даже не представлял, что это приведет меня так далеко. Все началось ' +
          'с мечты, с небольшого пламени внутри меня, которое пылало желанием ' +
          'создавать истории, погружаться в разные роли и передавать эмоции ' +
          'через экран. Первые шаги были нелегкими, как восхождение на самую ' +
          'высокую вершину. Но я всегда верил в себя, в свою страсть к искусству, ' +
          'и не боялся бросать вызовы. И, знаете, это сработало. Фильм за ' +
          'фильмом, роль за ролью, я начал ощущать, как моя карьера начинает ' +
          'набирать обороты. Конечно, были трудные моменты. Но как в любом ' +
          'хорошем сценарии, после темных страниц всегда наступает светлый ' +
          'поворот. Моя работа с такими талантливыми режиссерами и актерами, ' +
          'как Мартин Скорсезе, Кристофер Нолан, Кейт Уинслет и многими другими, ' +
          'стала настоящим уроком и вдохновением для меня. Но главное – это ' +
          'никогда не терять страсть. Каждая новая роль – это как новое ' +
          'приключение, новая возможность погрузиться в иную жизнь, понять ' +
          'другой мир. И я благодарен за каждую возможность, которая мне ' +
          'дается, за каждый фильм, который можно назвать не просто работой, ' +
          'а искусством.Так что, друзья, помните, всегда идите за своей мечтой, ' +
          'даже если она кажется на первый взгляд недостижимой. И помните, ' +
          'что успех – это не только результат таланта, ' +
          'но и упорства, страсти и веры в себя.',
    image: '../imgs/me-1.jpg',
    name: 'Молодой Ди Каприо',
    company: 'Пятерочка',
  },
];

const Start = () => {
  return (
    <div className="main__content">
      <Carousel items={carousel_items} />
      <Services history="Наши услуги" title="Мы специализируемся" />
      <Info history="О нас" title="Компания" name="ИвановПром" />
      <Clients items={clients_items} />
      <Reviews items={reviews_items} />
      <Contacts />
    </div>
  );
}

export default Start;