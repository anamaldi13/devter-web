import css from "styled-jsx/css";

export default css`
  article {
    display: flex;
    padding: 10px 15px;
    border-bottom: 2px solid #eee;
  }
  article:hover {
    background: #f5f8fa;
    cursor: pointer;
  }

  div {
    padding-right: 10px;
  }

  p {
    margin: 0;
    line-height: 1.2562em;
  }
  time {
    color: #555;
    font-size: 14px;
  }
  img {
    margin: 10px;
    widht: 250px;
    height: 250px;
    border-radius: 10px;
  }

  a {
    color: #555;
    font-size: 14px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
