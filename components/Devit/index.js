import Avatar from "../../components/Avatar";

export default function Devit({ avatar, message, username, id }) {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <div>
          <strong>{username}</strong>
          <p>{message}</p>
        </div>
      </article>
      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #eaf7ff;
        }
        div {
          padding-right: 10px;
        }

        p {
          margin: 0;
          line-height: 1.2562em;
        }
      `}</style>
    </>
  );
}
