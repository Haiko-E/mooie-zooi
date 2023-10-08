import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';
import { groq, createImageBuilder } from 'astro-sanity';
import { loadEnv } from 'vite';
// import type { SanityClientLike } from '@sanity/image-url/lib/types/types';

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export async function getAllProducts() {
  const query = groq`*[_type == "product" ] { title, image {_type, asset->{title, altText, url, description, "tags" : opt.media.tags[]->name}} , description, sold,_id, }`;
  const products = await sanityClient.fetch(query);
  return products;
}

export async function getProductById(id: string) {
  const query = groq`*[_type == "product" && _id == "2288a040-13e6-4009-8fac-fdf1c32ea867" ] `;
  const product = await sanityClient.fetch(query);
  return product[0];
}

export async function getProductsByCategory(slug: string) {
  const query = groq`*[_type == "category" && slug.current == "${slug}"  ] { "products" : *[_type == "product" && references(^._id) ]{..., "tags" : tags[]->name.current }} `;
  const products = await sanityClient.fetch(query);
  const result = products[0].products;
  return result;
}

export async function getNavItems() {
  const query = groq`*[_type == "navigation"] `;
  const navItems = await sanityClient.fetch(query);
  return navItems;
}

export async function getAllCategories() {
  const query = groq`*[_type == "category"] `;
  const categories = await sanityClient.fetch(query);
  return categories;
}

export async function getSlugs(type) {
  const query = groq`*[_type == "${type}"] {"slug" :slug.current}`;
  const slugs = await sanityClient.fetch(query);
  return slugs;
}

export async function getPage(title) {
  const query = groq`*[_type == "page" && title == "${title}"]`;
  const page = await sanityClient.fetch(query);
  return page[0];
}
