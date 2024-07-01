export interface StyleProps {
  base: Base;
  title: Title;
  back: Back;
  cards: Cards;
  card: Card;
}

interface Back {
  base: string;
  chevron: string;
  text: string;
}

interface Card {
  base: Base;
  checkbox: Mobile;
  details: Details;
  price: string;
  active: string;
}

interface Details {
  base: string;
  info: Info;
}

interface Info {
  base: string;
  top: string;
  retailer: Retailer;
  delivery: Delivery;
}

interface Delivery {
  base: Cards;
  time: Time;
  fee: Fee;
}

interface Time {
  base: string;
  mobile: Mobile;
}

interface Cards {
  mobile: Mobile;
}

interface Title {
  base: string;
  mobile: string;
}

interface Base {
  all: string;
  mobile: Mobile;
}

interface Mobile {
  base: string;
  active: Active;
  open?: string;
  close?: string;
}

interface Active {
  on: string;
  off: string;
}

interface Fee {
  base: string;
  mobile: string;
}

interface Retailer {
  base: string;
  mobile: string;
}
