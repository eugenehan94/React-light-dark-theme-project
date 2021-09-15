import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToggleBtn, Page, Title, Paragraph } from "./components/Styles";
import { BiSun, BiMoon } from "react-icons/bi";
const lightTheme = {
  background: "linear-gradient(#39598A, #79D7ED)",
  title: "#282c35",
  paragraph: "#ff4180",
  button: "#ff4180",
};

const darkTheme = {
  background: "#282c35",
  title: "#ffa7c4",
  paragraph: "white",
  button: "#ffa7c4",
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (theme) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const icon = theme === "light" ? <BiMoon size={40} /> : <BiSun size={40} />;
  return (
    <ThemeProvider theme={themes[theme]}>
      <Page>
        <ToggleBtn onClick={() => changeTheme(theme)}>{icon}</ToggleBtn>
        <Title>Light and Dark Theme</Title>
        <Paragraph>
          Nulla porta aliquam pharetra. Suspendisse ut elit vel elit suscipit
          molestie eget vel felis. Praesent consequat libero a felis ultrices,
          sit amet pretium odio eleifend. Etiam vulputate, arcu sed facilisis
          vulputate, tellus lacus porta urna, a imperdiet elit arcu feugiat
          risus. Vestibulum sit amet libero elit. Aenean tincidunt, augue vitae
          imperdiet rutrum, risus sem vehicula purus, eu porttitor odio erat
          eget nunc. Vivamus porttitor risus et est rhoncus, id bibendum enim
          egestas. Nulla ornare blandit eleifend. Quisque quis orci elementum,
          rhoncus ante nec, ullamcorper magna. Fusce eget diam ac mi semper
          malesuada quis nec diam. Proin commodo nulla bibendum diam maximus
          tincidunt. Duis pretium imperdiet purus id ultricies. In venenatis
          urna porta tincidunt malesuada.
        </Paragraph>
      </Page>
    </ThemeProvider>
  );
};

export default App;
