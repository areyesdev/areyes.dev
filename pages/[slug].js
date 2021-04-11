import fs from 'fs'
import path from 'path'
import renderToString from 'next-mdx-remote/render-to-string'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'

import Layout from '../components/Layout'
import Button from '../components/Button'

const components = {Button};

export default function Post({source, frontmatter}) {
  const content = hydrate(source, {components});

  return(
    <Layout>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <article>{content}</article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({params: {slug}}){
  const markdownWithMetadata = fs.readFileSync(`content/posts/${slug}.mdx`).toString();

  const {data, content} = matter(markdownWithMetadata);

  const options = {year: "numeric", month: "long", day: "numeric"};
  const formattedDate = data.date.toLocaleDateString("es-Es", options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };
  // const contentText = "Some **mdx** text, with a component <Button text='hello' />"
  const mdxSource = await renderToString(content, {components});
  return {
    props: {
      source: mdxSource,
      frontmatter
    }
  }
};
