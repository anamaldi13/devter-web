import { useState } from "react";
import AppLayout from "../../../components/AppLayout";
import Button from "../../../components/Button";
import useUser from "../../../hooks/useUser";

import { addDevit } from "../../../firebase/client";

import { useRouter } from "next/router";

const COMPOSE_STATE = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCESS: 2,
  ERROR: -1,
};

export default function ComposeTweet() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATE.USER_NOT_KNOW);
  const router = useRouter();
  const user = useUser();

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(COMPOSE_STATE.LOADING);
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      username: user.email,
    })
      .then(() => {
        router.push("/inicio");
      })
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATE.ERROR);
      });
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATE.LOADING;

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            placeholder="¿Qué esta pasando?"
            value={message}
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Devitear</Button>
          </div>
        </form>
      </AppLayout>

      <style jsx>{`
        div {
          padding: 15px;
        }
        textarea {
          font-size: 21px;
          border: 0;
          min-height: 200px;
          padding: 15px;
          resize: none;
          width: 100%;
          outline: 0;
        }
      `}</style>
    </>
  );
}
