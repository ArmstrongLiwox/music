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
      spotify: z.string().optional(),
      apple_music: z.string().optional(),
      youtube: z.string().optional(),
      tidal: z.string().optional(),
      amazon_music: z.string().optional(),
      bmi_registered: z.boolean().default(false),
    }),
    featured: z.boolean().default(false),
  }),
});

export const collections = { tracks };
