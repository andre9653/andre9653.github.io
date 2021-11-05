/* eslint-disable no-use-before-define */
import React from "react";
import { Container, Content } from "./style";
import img from "./assets/img/3964906.jpg";

interface User {
  name: string;
  lastName: string;
  age?: number;
  about: string;
}
interface UserState {
  users: Array<User>;
  loading: boolean;
}

export default function Main({ users, loading }: UserState) {
  return loading ? (
    <h1>loading...</h1>
  ) : (
    <Container>
      <Content className="md:container md:mx-auto">
        <section className="about">
          <h2>Desenvolvedor Front-End</h2>
          <p>{users[0].about}</p>

          <button
            className="link-github transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
            type="button"
          >
            GitHub
          </button>
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
