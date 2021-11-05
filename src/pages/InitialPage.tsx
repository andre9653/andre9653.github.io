import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import MainProjects from "../components/MainProjects";
import { api } from "../services/api";

export default function InitialPage() {
  const [users, setUsers] = useState({ users: [], loading: true });
  useEffect(() => {
    api
      .get("users")
      .then((response) =>
        setUsers({ ...users, users: response.data, loading: false })
      );
  }, []);

  return (
    <>
      <Header users={users.users} loading={users.loading} />
      <Main users={users.users} loading={users.loading} />
      <MainProjects />
    </>
  );
}
