import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  color: white;
  grid-area: "main";
  height: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-areas: "about", "picProfile";
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;

  .about {
    /* margin-top: 20px; */
    grid-area: "about";
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    height: 100%;
  }

  .about p {
    margin-top: 20px;
  }

  .picProfile {
    grid-area: "picProfile";
    background-color: white;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: rgb(93, 225, 217);
  }
`;