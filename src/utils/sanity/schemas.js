const informasi = {
    name: 'informasi',
    title: 'Informasi',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(70)
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

const layananOnline = {
    name: 'layananOnline',
    title: 'Layanan Online',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(1).max(70),
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Anda dapat menemukan nama-nama icon yang tersedia di situs web Material Icons: https://fonts.google.com/icons.',
            validation: (Rule) => Rule.required().custom(value => {
                const convertedValue = value.trim().toLowerCase().replace(/\s+/g, '_');
                if (convertedValue !== value) {
                    return `Nama ikon harus ditulis dalam huruf kecil dan menggunakan garis bawah (_). Sebagai contoh: "account_circle" untuk menggunakan icon Account Circle.`;
                }
                return true;
            })
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) =>
                Rule.required().uri({ allowRelative: false, scheme: ['https', 'http'] }),
        }
    ],
};

const post = {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(50)
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

const schemas = [informasi, layananOnline, post, staff];

export default schemas;