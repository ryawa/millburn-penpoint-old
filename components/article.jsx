import Image from "next/image";
import Link from "next/link";

export default function Article({ article }) {
  return (
    <section className="mb-24">
      <div className="mb-8">
        <Image
          src={article.data.image.src}
          alt={article.data.image.alt}
          width={2000}
          height={1000}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/post/${article.slug}`} className="hover:underline">
              {article.data.title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <time dateTime={article.data.date}>
              {new Date(article.data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{article.excerpt}</p>
          {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
        </div>
      </div>
    </section>
  );
}
