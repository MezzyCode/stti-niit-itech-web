import { client } from './utils';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)

export const sanityLoader = (source) => builder.image(source)