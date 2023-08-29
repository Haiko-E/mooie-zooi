import { useSanityClient, groq, createImageBuilder } from 'astro-sanity';
// import type { SanityClientLike } from '@sanity/image-url/lib/types/types';

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export async function getAllProducts() {
  const query = groq`*[_type == "product" ] { title, image {_type, asset->{title, altText, url, description, "tags" : opt.media.tags[]->name}} , description, sold,_id, }`;
  const products = await useSanityClient().fetch(query);
  return products;
}

export async function getProductById(id: string) {
  const query = groq`*[_type == "product" && _id == "2288a040-13e6-4009-8fac-fdf1c32ea867" ] `;
  const product = await useSanityClient().fetch(query);
  return product[0];
}

export async function getProductsByCategory(slug: string) {
  const query = groq`*[_type == "category" && slug.current == "${slug}"  ] { "products" : *[_type == "product" && references(^._id) ]{..., "tags" : tags[]->name.current }} `;
  const products = await useSanityClient().fetch(query);
  const result = products[0].products;
  return result;
}

export async function getNavItems() {
  const query = groq`*[_type == "navigation"] `;
  const navItems = await useSanityClient().fetch(query);
  return navItems;
}

export async function getAllCategories() {
  const query = groq`*[_type == "category"] `;
  const categories = await useSanityClient().fetch(query);
  return categories;
}

export async function getSlugs(type) {
  const query = groq`*[_type == "${type}"] {"slug" :slug.current}`;
  const slugs = await useSanityClient().fetch(query);
  return slugs;
}

export async function getPage(title) {
  const query = groq`*[_type == "page" && title == "${title}"]`;
  const page = await useSanityClient().fetch(query);
  return page[0];
}
