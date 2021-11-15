/* eslint-disable no-use-before-define */
import React from "react";
import { Container, Content } from "./style";
import img from "./assets/img/3964906.jpg";
import "animate.css";

interface User {
  name: string;
  lastName: string;
  age?: number;
  about: string;
  habilites?: Array<any>;
  projects?: Array<any>;
  github?: string;
}
interface UserState {
  user: User;
}

const classTailwind = {
  content: "md:container md:mx-auto",
  sectionAbout: "about animate__animated animate__backInLeft",
  sectionButton:
    "link-github transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110",
  divPicProfile:
    "picProfile transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 animate__animated animate__backInRight",
};

export default function Main({ user }: UserState) {
  return (
    <Container>
      <Content className={classTailwind.content}>
        <section className={classTailwind.sectionAbout}>
          <h2>Desenvolvedor Front-End</h2>
          <p>{user.about}</p>
          <a href={user.github} data-testid="link-github">
            <button className={classTailwind.sectionButton} type="button">
              GitHub
            </button>
          </a>
        </section>
        <div className={classTailwind.divPicProfile}>
          <img
            src={img}
            alt="Tecnologia vetor criado por stories - br.freepik.com"
          />
          {/* referencia a imagem utilizada */}
          <a className="link" href="https://br.freepik.com/vetores/tecnologia">
            Tecnologia vetor criado por stories - br.freepik.com
          </a>
        </div>
      </Content>
    </Container>
  );
}
