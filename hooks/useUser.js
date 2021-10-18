import router from "next/router";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "../firebase/client";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOW: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOW);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  /* El usuario cambia o no esta logueado -> lo enrutamos al inicio */
  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/");
  }, [user]);

  return user;
}
