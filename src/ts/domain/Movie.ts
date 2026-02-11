import Buyable from './Buyable';

export default class Movie implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly year: number;
  readonly country: string;
  readonly tagline: string;
  readonly genre: string[];
  readonly duration: number;

  constructor(
    id: number,
    name: string,
    price: number,
    year: number,
    country: string,
    tagline: string,
    genre: string[],
    duration: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genre = genre;
    this.duration = duration;
  }
}
