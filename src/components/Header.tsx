/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import Li from "./Li";
import Div from "./Div";

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
    <header>
      <Div typeClass="name">
        <p>{`${users.users[0].name} ${users.users[0].lastName}`}</p>
      </Div>
      <Div typeClass="nav-bar">
        <>
          <Li typeClass="li-header" text="Sobre" />
          <Li typeClass="li-header" text="Contato" />
          <Li typeClass="li-header" text="Projetos" />
        </>
      </Div>
    </header>
  );
}
