import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Props = {
  content: string;
};

async function renderMarkdown(input: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(input);

  return result.toString();
}

export default async function Markdown({ content }: Props) {
  const html = await renderMarkdown(content);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
