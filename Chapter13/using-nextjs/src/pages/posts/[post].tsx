import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          post: "1",
        },
      },
      {
        params: {
          post: "2",
        },
      },
      {
        params: {
          post: "3",
        },
      },
    ],
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const content = `This is a dynamic route example. The value of the post parameter is ${context.params?.post}.`;

  return { props: { content }, revalidate: 3600 };
}) satisfies GetStaticProps<{
  content: string;
}>;

export default function Post({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <main>
      <h1>Post - {router.query.post}</h1>

      <p>{content}</p>
    </main>
  );
}
