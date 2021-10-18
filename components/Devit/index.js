import Avatar from "../../components/Avatar";
import useTimeAgo from "../../hooks/useTimeAgo";

export default function Devit({
  avatar,
  content,
  username,
  id,
  userId,
  createdAt,
}) {
  const timeago = useTimeAgo(createdAt);
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <div>
          <strong>{username}</strong>
          <span> · </span>
          <date>{timeago}</date>
          <p>{content}</p>
        </div>
      </article>
      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #eee;
        }
        div {
          padding-right: 10px;
        }

        p {
          margin: 0;
          line-height: 1.2562em;
        }
        date {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
