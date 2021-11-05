import styled from "styled-components";

export const Container = styled.section`
  grid-area: "main-projects";
  display: grid;
  color: white;
  flex-direction: column;
  height: 100%;
  grid-template-rows: 1fr 4.5fr;
  justify-items: center;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 2rem;
  }

  .container-projects {
    width: 80%;
    height: 90%;
    display: flex;
    background-color: rgba(0, 0, 0, 50%);
    align-items: center;
    margin-bottom: 30px;
  }

  .container-projects div {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 50%);
  }
`;
