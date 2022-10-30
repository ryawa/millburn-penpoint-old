import Layout from "../components/layout";
import Header from "../components/header";
import Posts from "../components/posts";
import Head from "next/head";

export default function Home({ posts, categories }) {
  return (
    <Layout>
      <Head>
        <title>The Millburn Penpoint</title>
      </Head>
      <Header categories={categories} />
      <Posts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const posts = { "back-to-school-night": { title: "Back to School Night" } };
  const categories = {
    "school-news": "School News",
    "world-events": "World Events",
  };

  return {
    props: {
      posts: posts,
      categories: categories,
    },
  };
}
