import Avatar from "../../components/Avatar";
import useTimeAgo from "../../hooks/useTimeAgo";
import styles from "./styles";

export default function Devit({
  avatar,
  content,
  username,
  id,
  userId,
  createdAt,
  img,
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
          {img && <img src={img} />}
        </div>
      </article>
      <style jsx>{styles}</style>
    </>
  );
}
