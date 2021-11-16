// eslint-disable-next-line no-use-before-define
import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import MainProjects from "../components/MainProjects";
import MainHabilites from "../components/MainHabilites";

export const user = {
  name: "André",
  lastName: "Bezerra",
  age: 23,
  habilites: [],
  about:
    "Atualmente resolvi buscar o que me brilha os olhos, que é a tecnologia! Desde então estou fortemente empenhado nessa área, mas especificamente Front-End ReactJS",
  projects: [],
  github: "https://github.com/andre9653",
};

export default function InitialPage() {
  return (
    <>
      <Header user={user} />
      <Main user={user} />
      <MainProjects />
      <MainHabilites />
    </>
  );
}
