import Link from "next/link"
import fs from "fs";
import matter from 'gray-matter';

import Layout from '../components/Layout'

export default function Home({posts}) {
  return (
    <Layout>
      {posts.map(({frontmatter: {title, description, date}, slug}) => (
        <article key={slug}>
          <header>
            <h3 className="mb-2">
              <Link href={"[slug]"} as={`${slug}`}>
                <a className="text-3xl font-semibold text-blue-400 no-underline">{title}</a>
              </Link>
            </h3>
            <span className="mb-4 text-sm">{date}</span>
          </header>
          <section>
            <p className="mb-8">{description}</p>
          </section>
        </article>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(`content/posts/${filename}`).toString();

    const {data} = matter(markdownWithMetadata);

    const options = {year: "numeric", month: "long", day: "numeric"};
    const formattedDate = data.date.toLocaleDateString("es-Es", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    }
    return {
      slug: filename.replace(".mdx", ""),
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    }
  }
}