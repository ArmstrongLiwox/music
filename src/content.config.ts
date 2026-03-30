import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tracks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/tracks" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    genre: z.string(),
    releaseDate: z.date(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    streaming: z.object({
      spotify: z.string().url().optional(),
      apple_music: z.string().url().optional(),
      youtube: z.string().url().optional(),
      tidal: z.string().url().optional(),
      amazon_music: z.string().url().optional(),
      bmi_registered: z.boolean().default(false),
    }),
    featured: z.boolean().default(false),
  }),
});

export const collections = { tracks };
