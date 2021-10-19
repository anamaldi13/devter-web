import css from "styled-jsx/css";
import { colors } from "../../../styles/theme";
import { addOpacityColors } from "../../../styles/utils";

const backgroundColor = addOpacityColors(colors.black, 0.3);

export default css`
  div {
    padding: 15px;
  }
  form {
    margin: 10px;
  }
  section {
    flex: 1;
  }
  img {
    width: 100px;
    height: 100px;
  }
  .remove-img {
    position: relative;
  }

  .form-container {
    display: flex;
    align-items: flex-start;
  }

  .avatar-container {
    padding: 10px 0px 0px 10px;
  }

  button {
    background: ${backgroundColor};
    border: 0;
    border-radius: 999px;
    color: ${colors.white};
    font-size: 20px;
    width: 30px;
    height: 30px;
    top: 15px;
    position: absolute;
    rigth: 15px;
  }
`;
