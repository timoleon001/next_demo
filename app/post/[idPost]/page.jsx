import Post from "@/app/components/Post/Post";

export async function generateMetadata({ params, searchParams }) {
  const post = await fetchData(params.idPost);

  return {
    title: post.title + " - Статья на сайте",
    description: post.description,
  };
}

export async function generateStaticParams() {
  return [
    { idPost: "1" },
    { idPost: "2" },
    { idPost: "3" },
    { idPost: "4" },
    { idPost: "5" },
    { idPost: "6" },
    { idPost: "7" },
    { idPost: "8" },
    { idPost: "9" },
  ];
}

async function fetchData(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((json) => json.json());

  return res;
}

export default async function PagePost({ params }) {
  if (!params) {
    return <p>No data</p>;
  }

  const { idPost } = await params;
  const postInfo = await fetchData(idPost);

  return (
    <div>
      <Post postInfo={postInfo} />
    </div>
  );
}
