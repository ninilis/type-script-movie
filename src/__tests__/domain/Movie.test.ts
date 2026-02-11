import Movie from '../../ts/domain/Movie';

describe('Movie', () => {
  test('should create movie with all properties', () => {
    const movie = new Movie(
      101,
      'Аватар',
      450,
      2009,
      'США',
      'Вернись в Пандору',
      ['фантастика', 'приключения'],
      162
    );

    expect(movie.id).toBe(101);
    expect(movie.name).toBe('Аватар');
    expect(movie.price).toBe(450);
    expect(movie.year).toBe(2009);
    expect(movie.country).toBe('США');
    expect(movie.tagline).toBe('Вернись в Пандору');
    expect(movie.genre).toEqual(['фантастика', 'приключения']);
    expect(movie.duration).toBe(162);
  });

  test('should implement Buyable interface correctly', () => {
    const movie = new Movie(
      1,
      'Интерстеллар',
      550,
      2014,
      'США',
      'Следующий шаг человечества',
      ['фантастика', 'драма'],
      169
    );

    // Проверяем обязательные поля Buyable
    expect(movie).toHaveProperty('id');
    expect(movie).toHaveProperty('name');
    expect(movie).toHaveProperty('price');

    // Проверяем дополнительные поля Movie
    expect(movie).toHaveProperty('year');
    expect(movie).toHaveProperty('country');
    expect(movie).toHaveProperty('tagline');
    expect(movie).toHaveProperty('genre');
    expect(movie).toHaveProperty('duration');
  });

  test('should handle multiple genres', () => {
    const movie = new Movie(
      3,
      'Начало',
      700,
      2010,
      'США',
      'Твой разум — место преступления',
      ['триллер', 'фантастика', 'детектив'],
      148
    );

    expect(movie.genre.length).toBe(3);
    expect(movie.genre).toContain('триллер');
    expect(movie.genre).toContain('фантастика');
    expect(movie.genre).toContain('детектив');
  });
});
