import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

const GlobalStyle = createGlobalStyle`
  * {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
			html {
				font-size: 62.5%;
			}
			body {
				width: 100%;
				min-height: 100vh;
				background-color: azure;
			}
      a{
        color:#000;
        text-decoration: none;
      }
      ul,li{
        list-style: none;
      }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Dashboard />
			</Layout>
		</>
	);
}

export default App;
