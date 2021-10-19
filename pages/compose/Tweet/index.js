import { useEffect, useState } from "react";
import AppLayout from "../../../components/AppLayout";
import Button from "../../../components/Button";
import NavBar from "../../../components/Navbar";
import styles from "./styles";
import Avatar from "../../../components/Avatar/index";

import useUser from "../../../hooks/useUser";

import { addDevit, uploadImage } from "../../../firebase/client";

import { useRouter } from "next/router";
import Head from "next/head";

const COMPOSE_STATE = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCESS: 2,
  ERROR: -1,
};

const DRAG_IMAGES_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

export default function ComposeTweet() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATE.USER_NOT_KNOW);
  const router = useRouter();
  const user = useUser();
  /* Estados de la imagen: */
  const [drag, setDrag] = useState(DRAG_IMAGES_STATES.NONE);
  const [task, setTask] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    if (task) {
      const onProgress = () => {};
      const onError = () => {};
      const onComplete = () => {
        console.log("onComplete");
        task.snapshot.ref.getDownloadURL().then(setImgURL);
      };
      task.on("state_changed", onProgress, onError, onComplete);
    }
  }, [task]);

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
      img: imgURL,
    })
      .then(() => {
        router.push("/inicio");
      })
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATE.ERROR);
      });
  };

  const handleDragEnter = (e) => {
    setDrag(DRAG_IMAGES_STATES.DRAG_OVER);
  };

  const handleDragLeave = (e) => {
    setDrag(DRAG_IMAGES_STATES.NONE);
  };

  const handleDragDrop = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGES_STATES.NONE);
    const file = e.dataTransfer.files[0];

    const task = uploadImage(file);
    setTask(task);
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATE.LOADING;

  return (
    <>
      <AppLayout>
        <Head>
          <title>Crear un Devit / Devter</title>
        </Head>
        <section className="form-container">
          {user && (
            <div className="avatar-container">
              <Avatar src={user.avatar} />
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={handleChange}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDragDrop}
              placeholder="¿Qué esta pasando?"
              value={message}
            ></textarea>
            {imgURL && (
              <section className="remove-img">
                <button onClick={() => setImgURL(null)}>x</button>
                <img src={imgURL} />
              </section>
            )}
            <div>
              <Button disabled={isButtonDisabled}>Devitear</Button>
            </div>
          </form>
        </section>

        <NavBar />
      </AppLayout>

      <style jsx>{styles}</style>
      <style jsx>{`
        textarea {
          font-size: 21px;
          border: ${drag === DRAG_IMAGES_STATES.DRAG_OVER
            ? `3px dashed #09f`
            : "3px solid transparent"};
          boder-radius: 10px;
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
