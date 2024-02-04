export async function generateStaticParams() {
  return [{ post: "1" }, { post: "2" }, { post: "3" }];
}

export const revalidate = 3600;

export default async function Post({ params }: { params: { post: string } }) {
  return (
    <main>
      <h1>Post - {params.post}</h1>
      <p>
        This is a dynamic route example. The value of the post parameter is
        {params.post}.
      </p>
    </main>
  );
}
