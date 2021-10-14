import { useEffect, useState } from "react";

import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Avatar from "../components/Avatar/index";

import { loginWithGitHub, onAuthStateChanged } from "../firebase/client";

import { colors } from "../styles/theme";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGitHub()
      .then(setUser)
      .catch((err) => {
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
            {user == null && (
              <Button onClick={handleClick}>Login with GitHub</Button>
            )}
            {user && user.avatar && (
              <div>
                <Avatar src={user.avatar} alt="Foto avatar" text={user.email} />
              </div>
            )}
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
