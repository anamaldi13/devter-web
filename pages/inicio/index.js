import AppLayout from "../../components/AppLayout";
import { useState, useEffect } from "react";
import Devit from "../../components/Devit";
import useUser from "../../hooks/useUser";
import style from "./styles";

import { fetchLatestDevits } from "../../firebase/client";

import Head from "next/head";
import NavBar from "../../components/Navbar";

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
        <Head>
          <title>Inicio / Devter</title>
        </Head>
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
                img={devit.img}
              />
            );
          })}
        </section>
        <NavBar />
      </AppLayout>
      <style jsx>{style}</style>
    </>
  );
}
