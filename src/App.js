import React from "react";

import { Container, GlobalStyle } from "./styles/components";

const App = () => {
  const [city, setCity] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  function handleCities(typedCity) {
    const cities = [
      "São Paulo",
      "Rio de Janeiro",
      "Recife",
      "Maceió",
      "Tocantins",
    ];

    setCity(typedCity);
    if (!typedCity.length) {
      setSuggestions([]);
      return;
    }

    const suggest = cities.filter((city) => {
      const pattern = /[\u0300-\u036f]/g;
      const normalizePattern = "NFD";

      const cityFormatted = city
        .normalize(normalizePattern)
        .replace(pattern, "")
        .toLowerCase();

      const typedCityFormatted = typedCity
        .normalize(normalizePattern)
        .replace(pattern, "")
        .toLowerCase();

      return cityFormatted.startsWith(typedCityFormatted);
    });

    setSuggestions(suggest);
  }

  function handleSuggestedCity(c) {
    handleCities(c);
    setSuggestions([]);
  }

  function handleSearch(e) {
    if (!city.length) return;
    e.preventDefault();
    setSelectedCity(city);
    setCity("");
  }

  return (
    <main>
      <GlobalStyle />
      <Container>
        {selectedCity ? <h1>{selectedCity}</h1> : null}

        <label htmlFor="city">Type your city</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={({ target }) => handleCities(target.value)}
        />
        <ul>
          {suggestions.map((c) => (
            <li
              key={c}
              onClick={() => {
                handleSuggestedCity(c);
              }}
            >
              {c}
            </li>
          ))}
        </ul>
        <button onClick={handleSearch}>Buscar</button>
      </Container>
    </main>
  );
};

export default App;
