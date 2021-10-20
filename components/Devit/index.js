import Avatar from "../../components/Avatar";
import useTimeAgo from "../../hooks/useTimeAgo";
import styles from "./styles";
import useDateTimeFormat from "../../hooks/useDateTimeFormat";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const createdAtFormated = useDateTimeFormat(createdAt);
  const router = useRouter();

  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push(`/status/${id}`);
  };

  return (
    <>
      <article onClick={handleArticleClick}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <div>
          <strong>{username}</strong>
          <span> · </span>
          <Link href={`/status/${id}`}>
            <a>
              <time tile={createdAtFormated}>{timeago}</time>
            </a>
          </Link>
          <p>{content}</p>
          {img && <img src={img} />}
        </div>
      </article>
      <style jsx>{styles}</style>
    </>
  );
}
