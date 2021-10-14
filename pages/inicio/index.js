import AppLayout from "../../components/AppLayout";
import { useState, useEffect } from "react";
import Devit from "../../components/Devit";

export default function Inicio() {
  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimelines);
    console.log(timelines);
  }, []);

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
                message={devit.message}
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
          border-bottom: 1px solid #ccc;
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
        }
        section {
          padding-top: 49px;
        }
        nav {
          bottom: 0;
          border-top: 1px solid #ccc;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  );
}
