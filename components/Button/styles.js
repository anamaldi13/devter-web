import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
  button {
    background: ${colors.black};
    border: 0;
    color: #fff;
    cursor: pointer;
    border-radius: 9999px;
    font-size: 16px;
    font-weight: 800;
    padding: 8px 24px;
    transition: opacity 0.3x ease;
  }

  button:hover {
    opacity: 0.7;
  }

  button[disabled] {
    /* cuando el boton tiene el atributo disabled */
    opacity: 0.2;
    pointer-events: none;
  }
`;
