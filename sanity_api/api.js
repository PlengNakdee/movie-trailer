import client from "./sanity";

export async function getData() {
  const results = await client.fetch(`*[_type == "movie"]{
    "poster": poster.asset->url,
    }| order(date desc)`);
  return results;
}