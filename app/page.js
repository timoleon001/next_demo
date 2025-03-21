import Link from "next/link";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = res.json();
  return result;
}

export default async function Page() {
  const posts = await fetchData();

  return (
    <>
      <h1>Заголовок страницы</h1>
      <div className="posts">
        {posts.map((post) => {
          return (
            <div key={post.id} className="item-post">
              <h3>
                {post.id}. {post.title}
              </h3>
              <p>{post.body}</p>
              <Link href={`/post/${post.id}`} className="btn">
                Detal{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
