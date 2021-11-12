import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Main from "./components/Main";
import { user } from "./pages/InitialPage";

describe("1 - Elementos do Header", () => {
  test("Testa se existe um elemento que armazena a logo", () => {
    render(<App />);
    const logoElement = screen.getByTestId("logo-header");

    expect(logoElement).toBeInTheDocument();
  });

  test("Testa se existe uma navbar", () => {
    render(<App />);

    const navElement = screen.getByTestId("nav-header");

    expect(navElement).toBeInTheDocument();
  });
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

describe("2 - Elementos da main", () => {
  test("Testa se Contem um conteudo 'sobre' ", () => {
    render(<Main user={user} />);

    const titleElement = screen.getByRole("heading", { level: 2 });
    const textElement = screen.getByText(/atualmente resolvi/i);
    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test("Testa botão para o GitHub", () => {
    const url = "https://github.com/andre9653";
    render(<Main user={user} />);

    const buttonElement = screen.getByTestId("link-github");
    expect(buttonElement.href).toContain(url);
  });
});
