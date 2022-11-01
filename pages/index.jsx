import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
import Posts from "../components/posts";
import { getCategories } from "../lib/api";

export default function Home({ categories }) {
  return (
    <Layout>
      <Head>
        <title>The Millburn Penpoint</title>
      </Head>
      <Header categories={categories} />
      <Posts />
    </Layout>
  );
}

export async function getStaticProps() {
  const categories = getCategories();

  return {
    props: {
      categories: categories,
    },
    revalidate: 10,
  };
}
