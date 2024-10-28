export const translationType = {
  name: 'translation',
  title: 'Translation',
  type: 'document',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
    },
    {
      name: 'translations',
      title: 'Translations',
      type: 'object',
      fields: [
        {
          name: 'home',
          title: 'Home',
          type: 'string',
        },
        {
          name: 'aboutMe',
          title: 'About Me',
          type: 'string',
        },
        {
          name: 'works',
          title: 'Works',
          type: 'string',
        },
        {
          name: 'contact',
          title: 'Contact',
          type: 'string',
        },
      ],
    },
  ],
}
