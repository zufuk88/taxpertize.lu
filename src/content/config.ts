import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
    category: z.string(),
    readTime: z.string(),
    slug: z.string().optional(), // Make slug optional since Astro generates it
    featured: z.boolean().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};