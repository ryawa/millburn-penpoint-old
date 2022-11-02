import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getArticles() {
  const directory = path.join(process.cwd(), "content/articles");
  const filenames = fs.readdirSync(directory);
  const articles = filenames.map((filename) => {
    const article = matter.read(path.join(directory, filename), {
      excerpt: (file) => (file.excerpt = file.content.split("\n\n")[0]),
    });
    return {
      slug: path.parse(filename).name,
      data: article.data,
      content: article.content,
      excerpt: article.excerpt,
    };
  });
  return articles;
}

export function getCategories() {
  const directory = path.join(process.cwd(), "content/categories");
  const filenames = fs.readdirSync(directory);
  const categories = filenames.map((filename) => {
    const file = matter.read(path.join(directory, filename));
    return {
      slug: path.parse(filename).name,
      data: file.data,
    };
  });
  return categories;
}
