// eslint-disable-next-line no-use-before-define
import React from "react";
import { Container, Content } from "./style";

interface User {
  name: string;
  lastName: string;
  age?: number;
  about: string;
  habilites?: Array<any>;
  projects?: Array<any>;
}
interface UserState {
  user: User;
}

export default function Header({ user }: UserState) {
  return (
    <Container>
      <Content>
        <div className="name" data-testid="logo-header">
          <span className="span">{`</`}</span>
          {`${user.name} ${user.lastName}`}
          <span className="span">{`>`}</span>
        </div>
        <nav className="nav-bar" data-testid="nav-header">
          <li>
            <a href="#page-projects">Projetos</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </nav>
      </Content>
    </Container>
  );
}
