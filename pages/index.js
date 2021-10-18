import { useEffect } from "react";

import AppLayout from "../components/AppLayout";
import Button from "../components/Button";

import { loginWithGitHub } from "../firebase/client";

import { colors } from "../styles/theme";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import useUser, { USER_STATES } from "../hooks/useUser";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  /* Cuando se modifique el usuario, creamos una redireccion a /inicio con el Router 
  Si es un usuario ya logueado te redirecciona a la home */
  useEffect(() => {
    user && router.replace("/inicio");
  }, [user]);

  const handleClick = () => {
    loginWithGitHub().catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className={styles.container}>
      <AppLayout>
        <section>
          <img src="/logo-twitter.png" />
          <h1>DEVTER!</h1>
          <h2>
            Talk about development <br />
            with developers
          </h2>
          <div>
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>Login with GitHub</Button>
            )}
            {user === USER_STATES.NOT_KNOW && <img src="/spinner.gif" />}
          </div>
        </section>
      </AppLayout>

      <style jsx>
        {`
          img {
            width: 120px;
          }
          ,
          div {
            margin-top: 16px;
          }
          ,
          section {
            display: grid;
            height: 100%;
            place-content: center;
            place-items: center;
          }
          h1 {
            font-size: 30px;
            color: ${colors.secondary};
            font-weight: 800;
            margin-bottom: 8px;
          }

          ,
          h2 {
            color: ${colors.primary};
            font-size: 16px;
            text-align: center;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}
