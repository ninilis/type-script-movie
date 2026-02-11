import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  // Суммарная стоимость без скидки
  getTotalPrice(): number {
    return this._items.reduce((total: number, item: Buyable) => total + item.price, 0);
  }

  // Суммарная стоимость со скидкой (скидка в процентах)
  getTotalPriceWithDiscount(discount: number): number {
    const total = this.getTotalPrice();
    return total - (total * discount) / 100;
  }

  // Удаление элемента по id
  removeItemById(id: number): void {
    this._items = this._items.filter((item: Buyable) => item.id !== id);
  }
}
