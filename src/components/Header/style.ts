import styled from "styled-components";

export const Container = styled.header`
  color: white;
`;

export const Content = styled.div`
  display: grid;
  grid-template-areas: "logo" "navbar";
  align-items: center;
  justify-content: space-evenly;
  max-width: 1120px;
  padding: 2rem 1rem 10rem;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  .name {
    grid-area: "logo";
    cursor: default;
    font-weight: 600;
  }

  a {
    color: white;
    /* margin: 0 2rem; */
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  .nav-bar {
    grid-area: "navBar";
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .span {
    color: rgb(93, 225, 217);
  }
`;
