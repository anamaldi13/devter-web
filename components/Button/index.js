import { colors } from "../../styles/theme";

export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>

      <style jsx>
        {`
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
        `}
      </style>
    </>
  );
}
