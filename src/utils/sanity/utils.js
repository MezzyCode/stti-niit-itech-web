import { createClient, groq } from 'next-sanity';

export const client = createClient({
    projectId: 'btyqzbhp',
    dataset: 'production',
    apiVersion: '2023-07-06'
});

export async function getInformasi(limit = 40) {
    return client.fetch(
        groq`*[_type == "informasi"][0...$limit]{
            _id,
            _createdAt,
            name,
            category,
            "slug": slug.current,
            image,
            content
          }
        `,
        { limit: limit }    
    )
}

export async function getInformasiSlug(slug) {
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

export async function getPostByName(name) {
    return client.fetch(
        groq`*[_type == "post" && name == $name][0]{
            _id,
            _createdAt,
            "slug": slug.current,
            name,
            image,
            content
          }
        `,
        { name: name }
    )
}

export async function getProdi() {
    return client.fetch(
        groq`
        *[_type == "post" && name match "Program Studi:"] {
          _id,
          _createdAt,
          "slug": slug.current,
          name,
          image,
          content
          }
        `
    )
}

export async function getLayananInformasi() {
    return client.fetch(
        groq`*[_type == "layananOnline"]{
            _id,
            _createdAt,
            name,
            icon,
            content,
            url
          }
        `,  
    )
}