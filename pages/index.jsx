import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
import Articles from "../components/articles";
import { getArticles, getCategories } from "../lib/api";

export default function Home({ articles, categories }) {
  return (
    <Layout>
      <Head>
        <title>The Millburn Penpoint</title>
      </Head>
      <Header categories={categories} />
      <Articles articles={articles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = getArticles();
  const categories = getCategories();

  return {
    props: {
      articles: articles,
      categories: categories,
    },
    revalidate: 60,
  };
}
