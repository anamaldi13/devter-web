import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
header {
    align-items: center;
    background: #ffffffaa;
    backdrop-filter: blur(8px);
    border-bottom: 1px solid #eee;
    height: 49px;
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
  }
  section {
    flex: 1;
  }
  }
  h2 {
    font-size: 21px;
    font-weight: 800;
    padding-left: 15px;
  }
  
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

  nav a:hover > :global(svg){
    stroke: ${colors.primary}
  }

`;
