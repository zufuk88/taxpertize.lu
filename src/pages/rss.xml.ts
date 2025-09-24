import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');

  return rss({
    title: 'Taxpertize Blog',
    description: 'Expert tax insights and regulatory updates from Luxembourg. Stay informed on ATAD 3, transfer pricing, investment funds, and international tax planning.',
    site: context.site || 'https://taxpertize.lu',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
      categories: [post.data.category],
    })),
    customData: `<language>en-us</language>
<copyright>Copyright © ${new Date().getFullYear()} Taxpertize. All rights reserved.</copyright>
<webMaster>contact@taxpertize.lu (Taxpertize Team)</webMaster>
<managingEditor>contact@taxpertize.lu (Taxpertize Editorial)</managingEditor>
<category>Tax Advisory</category>
<category>Luxembourg</category>
<category>International Tax</category>`,
    stylesheet: '/rss-styles.xsl',
  });
}