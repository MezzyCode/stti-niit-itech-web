import { createClient, groq } from 'next-sanity';

export const client = createClient({
    projectId: 'btyqzbhp',
    dataset: 'production',
    apiVersion: '2023-07-06'
});

export async function getInformasi(limit = 40, category = '') {
    const categoryFilter = category ? ` && category == $category` : '';

    return client.fetch(
        groq`*[_type == "informasi"${categoryFilter}] | order(_createdAt desc) [0...$limit] {
            _id,
            _createdAt,
            name,
            category,
            "slug": slug.current,
            image,
            content
          }`,
        {
            limit: limit,
            category: category
        }
    );
}


export async function getInformasiSlug(slug) {
    return client.fetch(
        groq`*[_type == "informasi" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            category,
            "slug": slug.current,
            image,
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

export async function getStaff() {
    const staffData = await client.fetch(
        groq`*[_type == "staff"]{
            _id,
            _createdAt,
            name,
            category,
            role,
            image,
            content
          }
        `,
    )

    const roleOrder = {
        'Ketua': 1,
        'Wakil Ketua': 2,
        'KaProdi': 3,
        'Other': 99
    }

    const mainRole = (role) => {
        if (role in roleOrder) {
            return role; // Return the entire role name if it exists in roleOrder
        } else {
            return role.split(" ")[0]; // Extract the main role category without suffixes
        }
    };

    // Sort staff data based on the custom role order
    staffData.sort((a, b) => {
        const roleA = mainRole(a.role);
        const roleB = mainRole(b.role);

        const orderA = roleOrder[roleA] || 99;
        const orderB = roleOrder[roleB] || 99;

        if (orderA !== orderB) {
            return orderA - orderB; // Different main role categories, sort based on main category
        } else {
            // If both have the same main role category, sort based on the full role name
            return a.role.localeCompare(b.role);
        }
    });
    return staffData;
}