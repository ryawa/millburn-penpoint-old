import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getCategories() {
  const directory = path.join(process.cwd(), "content/categories");
  const filenames = fs.readdirSync(directory);
  const articles = filenames.map((filename) => {
    const file = matter.read(path.join(directory, filename));
    return {
      slug: path.parse(filename).name,
      data: file.data,
    };
  });
  return articles;
}
