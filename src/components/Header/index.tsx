/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Content } from "./style";

interface User {
  name: string;
  lastName: string;
  age?: number;
}
interface UserState {
  users: Array<User>;
  loading: boolean;
}

export default function Header() {
  const [users, setUsers] = useState<UserState>({ users: [], loading: true });
  useEffect(() => {
    api
      .get("users")
      .then((response) =>
        setUsers({ ...users, users: response.data, loading: false })
      );
  }, []);

  return users.loading ? (
    <h1>loading...</h1>
  ) : (
    <Container>
      <Content>
        <div className="name">
          <span className="span">{`</`}</span>
          {`${users.users[0].name} ${users.users[0].lastName}`}
          <span className="span">{`>`}</span>
        </div>
        <div className="nav-bar">
          <li>
            <a href="/">Projetos</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </div>
      </Content>
    </Container>
  );
}
