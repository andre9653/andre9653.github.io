/* eslint-disable no-use-before-define */
import React from "react";
import { Container, Content } from "./style";
import img from "./assets/img/3964906.jpg";

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

export default function Main({ user }: UserState) {
  return (
    <Container>
      <Content className="md:container md:mx-auto">
        <section className="about">
          <h2>Desenvolvedor Front-End</h2>
          <p>{user.about}</p>
          <a href={user.github} data-testid="link-github">
            <button
              className="link-github transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
              type="button"
            >
              GitHub
            </button>
          </a>
        </section>
        <div className="picProfile transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
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
