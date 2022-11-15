import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
  background-color: #c7e5eb;
    display: grid;
    place-items: center;
  }
`;
export const Container = styled.form`
  grid-template-rows: 1fr 1fr;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;

  button {
    cursor: pointer;
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 20px;
    padding: 1rem;
    text-transform: uppercase;
    color: #777;
  }

  h1 {
    color: #131313;
    text-transform: uppercase;
    margin-top: 20px;
    text-align: center;
    font-size: 2.4rem;
    word-wrap: break-word;
    margin: 20px;
  }

  ul {
    position: absolute;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    background-color: #fff;
    width: 100%;
    max-width: 600px;
    list-style: none;

    li {
      padding: 1rem;
      border-bottom: 2px solid #eee;
      border-left: 2px solid #eee;
      border-right: 2px solid #eee;
      background-color: #fff;
      &:hover {
        background-color: #ddd;
        cursor: pointer;
      }
    }
  }
  label {
    font-size: 2rem;
    border-bottom: 2px solid #000;
  }
  input {
    margin-top: 20px;
    display: block;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 2px solid #ddd;
    height: 5rem;
    padding: 8px 16px;
    color: #555;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
    outline: 2px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0px, 0.3);
    max-width: 600px;
  }
`;
