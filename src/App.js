import React from "react";
import styled from "styled-components";

import {
  Container,
  SuggestionsList,
  Suggestion,
  Input,
  SubmitBtn,
  Title,
} from "./styles/components";

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

  function handleSearch(e) {
    if (!city.length) return;
    e.preventDefault();
    setSelectedCity(city);
    setCity("");
  }

  return (
    <Container>
      <Input
        type="text"
        value={city}
        onChange={({ target }) => handleCities(target.value)}
      />
      <SuggestionsList>
        {suggestions.map((c) => (
          <Suggestion
            key={c}
            onClick={() => {
              setCity(c);
              setSuggestions([]);
            }}
          >
            {c}
          </Suggestion>
        ))}
      </SuggestionsList>
      <SubmitBtn onClick={handleSearch}>Buscar</SubmitBtn>
      {selectedCity ? <Title>{selectedCity}</Title> : null}
    </Container>
  );
};

export default App;
