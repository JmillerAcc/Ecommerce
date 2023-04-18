import sanityClient from '..sanity/cli';
import { urlFor } from '@sanity/url-builder'

export const client = sanityClient({
  projectID: '2lesww3m',
  dataset: 'production',
  apiVersion: '2023-04-2023',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const getUrl = (source) => urlFor(source).url();
export const getImageUrl = (source) => builder.image(source);
