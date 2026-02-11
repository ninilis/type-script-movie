import Cart from '../../service/Cart';
import Movie from '../../domain/Movie';

describe('Cart', () => {
  let cart: Cart;
  let avengers: Movie;
  let darkKnight: Movie;

  beforeEach(() => {
    cart = new Cart();
    avengers = new Movie(
      1,
      'Мстители',
      500,
      2012,
      'США',
      'Avengers Assemble!',
      ['фантастика', 'боевик'],
      137
    );
    darkKnight = new Movie(
      2,
      'Темный рыцарь',
      600,
      2008,
      'США',
      'Why So Serious?',
      ['триллер', 'криминал'],
      152
    );
  });

  // Ваш тест
  test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
    expect(cart.items).toEqual([]);
  });

  test('add method should add item to cart', () => {
    cart.add(avengers);
    expect(cart.items.length).toBe(1);
    expect(cart.items).toContain(avengers);
  });

  test('items getter should return copy of items array', () => {
    cart.add(avengers);
    const items = cart.items;
    items.push(darkKnight);

    expect(cart.items.length).toBe(1);
    expect(cart.items).not.toContain(darkKnight);
  });

  test('getTotalPrice should return sum of all items prices', () => {
    expect(cart.getTotalPrice()).toBe(0);

    cart.add(avengers);
    expect(cart.getTotalPrice()).toBe(500);

    cart.add(darkKnight);
    expect(cart.getTotalPrice()).toBe(1100);
  });

  test('getTotalPriceWithDiscount should calculate price with discount', () => {
    cart.add(avengers);
    cart.add(darkKnight);

    expect(cart.getTotalPriceWithDiscount(10)).toBe(990);
    expect(cart.getTotalPriceWithDiscount(0)).toBe(1100);
    expect(cart.getTotalPriceWithDiscount(50)).toBe(550);
    expect(cart.getTotalPriceWithDiscount(100)).toBe(0);
  });

  test('getTotalPriceWithDiscount should work with empty cart', () => {
    expect(cart.getTotalPriceWithDiscount(10)).toBe(0);
  });

  test('removeItemById should remove item with specified id', () => {
    cart.add(avengers);
    cart.add(darkKnight);

    cart.removeItemById(1);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].id).toBe(2);
    expect(cart.items[0].name).toBe('Темный рыцарь');

    cart.removeItemById(2);
    expect(cart.items.length).toBe(0);
  });

  test('removeItemById should not remove anything if id not found', () => {
    cart.add(avengers);
    cart.add(darkKnight);

    cart.removeItemById(999);
    expect(cart.items.length).toBe(2);
    expect(cart.items).toContain(avengers);
    expect(cart.items).toContain(darkKnight);
  });

  test('removeItemById should work with empty cart', () => {
    expect(() => {
      cart.removeItemById(1);
    }).not.toThrow();
    expect(cart.items.length).toBe(0);
  });

  // Дополнительный тест для полного покрытия
  test('should handle multiple operations', () => {
    cart.add(avengers);
    cart.add(darkKnight);

    expect(cart.getTotalPrice()).toBe(1100);

    cart.removeItemById(1);
    expect(cart.getTotalPriceWithDiscount(20)).toBe(480); // 600 - 20% = 480

    cart.removeItemById(2);
    expect(cart.getTotalPrice()).toBe(0);
  });
});
