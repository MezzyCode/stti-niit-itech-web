const informasi = {
    name: 'informasi',
    title: 'Informasi',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(10).max(70)
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Berita', value: 'berita' },
                    { title: 'Pengumuman', value: 'pengumuman' }
                ],
            },
            initialValue: 'berita'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 30
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
}

const staff = {
    name: 'staff',
    title: 'Staff',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nama',
            type: 'string',
            validation: Rule => Rule.required().min(5).max(50)
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Dosen', value: 'dosen' },
                    { title: 'Staff', value: 'staff' }
                ],
            },
            initialValue: 'dosen'
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: Rule => Rule.required().max(30)
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        }
    ]
}

const schemas = [informasi, staff];

export default schemas;