import Link from "next/link";

export default function Post({ postInfo }) {
  return (
    <>
      <h1>
        Post id {postInfo.id} - {postInfo.title}
      </h1>
      <p>{postInfo.body}</p>
      <Link href="/" className="btn">
        Назад на главную
      </Link>
    </>
  );
}
