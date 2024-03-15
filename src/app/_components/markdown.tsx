export default function Markdown({ content }: { content: string }) {
  return (
    <article
      className='prose lg:prose-xl prose-headings:text-cb-white prose-a:text-cb-pink hover:prose-a:text-cb-pink/75 prose-code:text-cb-mint bg-cb-blue text-cb-white w-full rounded p-4'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
