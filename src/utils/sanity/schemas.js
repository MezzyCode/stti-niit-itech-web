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

const schemas = [informasi];

export default schemas;