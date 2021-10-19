import css from "styled-jsx/css";
import { colors } from "../../styles/theme";
export default css`
  nav {
    bottom: 0;
    background: #fff;
    border-top: 1px solid #eee;
    height: 50px;
    position: sticky;
    width: 100%;
    display: flex;
  }

  nav a {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  nav a:hover {
    background: radial-gradient(#0099ff22 15%, transparent 16%);
    background-size: 180px 180px;
    background-position: center;
  }

  nav a:hover > :global(svg) {
    stroke: ${colors.primary};
  }
`;
