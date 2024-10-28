import { defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50).error('Name must be between 2 and 50 characters.'),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            { name: 'email', invert: false }
          )
          .error('Please enter a valid email address.'),
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100).error('Subject must be between 5 and 100 characters.'),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(1000).error('Message must be between 10 and 1000 characters.'),
    }
  ],
});
