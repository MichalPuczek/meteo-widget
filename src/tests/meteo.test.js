import meteoReducer from '../store/reducers/meteo';

test('initial state of the meteo reducer', () => {
  expect(meteoReducer(undefined, {})).toEqual(
    {
      searchInput: '',
      savedCity: 'Warsaw',
      mainSavedCity: {temp: 0, feels_like: 0},
      navCities: [
        {
          city: 'Paris',
          main: {},
        },
        {
          city: 'Chorzow',
          main: {},
        },
      ],
      error: '',
      navOpen: false,
    }
  );
});