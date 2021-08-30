import client from "./sanity";

export async function getData() {
  const results = await client.fetch(`*[_type == "movie"]{
    "banner": banner.asset->url,
    "poster": poster.asset->url,
    slug,
    title,
    }| order(date desc)`);
  return results;
}

export async function getAllSlugs() {
  const results = await client
    .fetch(`*[_type == "movie"]{
      "id": _id,
      slug,
      title,
    }| order(date desc)`);
  return results;
}