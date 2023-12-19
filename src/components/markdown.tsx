import { remark } from "remark";
import html from "remark-html";

type Props = {
  content: string;
};

async function renderMarkdown(input: string) {
  const result = await remark().use(html).process(input);

  return result.toString();
}

export default async function Markdown({ content }: Props) {
  const html = await renderMarkdown(content);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
