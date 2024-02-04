import Link from "next/link";

export default async function Posts() {
  const posts = ["1", "2", "3"];

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            <Link href={`/posts/${post}`}>Post {post}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
