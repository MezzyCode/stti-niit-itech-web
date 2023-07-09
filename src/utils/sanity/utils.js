import { createClient, groq } from 'next-sanity';

export const client = createClient({
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
            "image_url": image.asset -> url,
            "image_alt": image.alt,
            content
          }
        `
    )
}

export async function getInformasiPost(slug) {
    return client.fetch(
        groq`*[_type == "informasi" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            category,
            "slug": slug.current,
            "image_url": image.asset -> url,
            "image_alt": image.alt,
            content
          }
        `,
        { slug: slug }
    )
}