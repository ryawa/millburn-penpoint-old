import Head from "next/head";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Articles from "../../components/articles";
import { getArticles, getCategories } from "../../lib/api";

export default function Category({ category, categories, articles }) {
  return (
    <Layout>
      <Head>
        <title>{`The Millburn Penpoint - ${category.data.name}`}</title>
      </Head>
      <Header categories={categories} />
      <h1 className="my-12 text-6xl font-bold tracking-tight">
        {category.data.name}
      </h1>
      <Articles articles={articles} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const categories = getCategories();
  const category = categories.find((category) => category.slug === params.slug);
  const articles = getArticles().filter((article) =>
    article.data.categories.includes(category.slug)
  );
  return {
    props: {
      categories,
      category,
      articles,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const categories = getCategories();
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  return { paths, fallback: false };
}
