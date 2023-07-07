import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: 'btyqzbhp',
    dataset: 'production',
    apiVersion: '2023-07-06'
});

export async function getInformasi() {
    return client.fetch(
        groq`*[_type == "informasi"]{
            _id,
            _createdAt,
            name,
            category,
            "slug": slug.current,
            "image": image.asset > url,
            url,
            content
          }
        `
    )
}