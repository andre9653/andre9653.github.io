/* eslint-disable no-use-before-define */
import React from "react";
import { Container, Content } from "./style";

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
      <Content>
        <section className="about">
          <h2>Desenvolvedor Front-End</h2>
          <p>{users[0].about}</p>
        </section>
        <div className="picProfile">Profile pic</div>
      </Content>
    </Container>
  );
}
