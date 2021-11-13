// eslint-disable-next-line no-use-before-define
import React from "react";
import { Container, Content } from "./style";
import "animate.css";

type Habilites = {
  name: string;
  img: string;
};

type Projects = {
  name: string;
  img: string;
  link: string;
};
interface User {
  name: string;
  lastName: string;
  age?: number;
  about: string;
  habilites?: Array<Habilites>;
  projects?: Array<Projects>;
}
interface UserState {
  user: User;
}

const wordsOfHeader = [
  { name: "Projects", href: "#page-projects" },
  { name: "Habilidades", href: "#page-habilites" },
  { name: "Contato", href: "#page-contact" },
];

export default function Header({ user }: UserState) {
  const listComponentLink = (text: string, href: string) => (
    <li>
      <a href={href}>{text}</a>
    </li>
  );

  return (
    <Container>
      <Content>
        <div
          className="name animate__animated animate__bounce"
          data-testid="logo-header"
        >
          <span className="span">{`</`}</span>
          {`${user.name} ${user.lastName}`}
          <span className="span">{`>`}</span>
        </div>
        <nav className="nav-bar" data-testid="nav-header">
          {wordsOfHeader.map((element) =>
            listComponentLink(element.name, element.href)
          )}
        </nav>
      </Content>
    </Container>
  );
}
