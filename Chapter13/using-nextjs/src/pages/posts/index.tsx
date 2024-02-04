import Link from "next/link";

export async function getStaticProps() {
  const posts = ["1", "2", "3"];

  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }: { posts: string[] }) {
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
