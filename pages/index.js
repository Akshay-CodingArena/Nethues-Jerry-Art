import { createTheme, ThemeProvider } from "@mui/material/styles";
import Main from "./components/Nav";
import Layout from "./layout";

function Home() {
  const theme = createTheme({
    palette: {
      primary: rgb(44, 75, 104),
      secondary: yellow,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Main activePage="dashboard" />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default Home;
