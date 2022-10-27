import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c7e5eb;
  padding: 20px;
  padding-top: 200px;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 280px;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  background-color: #fff;
  width: calc(100vw - 40px);
  max-width: 600px;
`;

export const Suggestion = styled.li`
  list-style: none;
  padding: 1rem;
  border-bottom: 2px solid #ccc;
  background-color: #fff;
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

export const Input = styled.input`
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
`;

export const SubmitBtn = styled.button`
  cursor: pointer;
  font-size: 2.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: 20px;
  padding: 1rem;
  text-transform: uppercase;
  color: #777;
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: #131313;
  text-transform: uppercase;
  margin-top: 20px;
  text-align: center;
  font-size: 2.4rem;
  word-wrap: break-word;
`;
