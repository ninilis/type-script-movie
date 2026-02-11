import Cart from '../../ts/service/Cart';
import Movie from '../../ts/domain/Movie';

describe('Cart with Movie integration', () => {
  test('should add and remove movies from cart', () => {
    const cart = new Cart();
    const movie1 = new Movie(1, 'Фильм 1', 100, 2020, 'США', 'Тег1', ['жанр1'], 120);
    const movie2 = new Movie(2, 'Фильм 2', 200, 2021, 'США', 'Тег2', ['жанр2'], 130);

    cart.add(movie1);
    cart.add(movie2);

    expect(cart.getTotalPrice()).toBe(300);
    expect(cart.getTotalPriceWithDiscount(20)).toBe(240);

    cart.removeItemById(1);
    expect(cart.items.length).toBe(1);
    expect(cart.getTotalPrice()).toBe(200);
  });
});
