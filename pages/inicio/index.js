import AppLayout from "../../components/AppLayout";
import { useState, useEffect } from "react";
import Devit from "../../components/Devit";
import useUser from "../../hooks/useUser";

import { fetchLatestDevits } from "../../firebase/client";

export default function Inicio() {
  const [timelines, setTimelines] = useState([]);
  const user =
    useUser(); /* para no mostrarle la información si no esta logueado */

  useEffect(() => {
    user && fetchLatestDevits().then(setTimelines); // devuelve una promesa, por eso el Then
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timelines.map((devit) => {
            return (
              <Devit
                key={devit.key}
                username={devit.username}
                avatar={devit.avatar}
                content={devit.content}
                userId={devit.userId}
                createdAt={devit.createdAt}
                id={devit.id}
              />
            );
          })}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
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
        }
      `}</style>
    </>
  );
}
