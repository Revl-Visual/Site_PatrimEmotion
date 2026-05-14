import { defineField, defineType } from 'sanity'

export const contactSubmissionType = defineType({
  name: 'contactSubmission',
  title: 'Contact',
  type: 'document',
  groups: [
    { name: 'contact', title: 'Coordonnées' },
    { name: 'content', title: 'Message' },
    { name: 'meta', title: 'Métadonnées' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Nom complet',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'subject',
      title: 'Sujet',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: 'Demande de bilan patrimonial', value: 'bilan' },
          { title: 'Devenir licencié', value: 'licence' },
          { title: 'Partenariat institutionnel', value: 'partenariat' },
          { title: 'Autre', value: 'autre' },
        ],
      },
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'sourceUrl',
      title: 'URL de la page',
      type: 'url',
      group: 'meta',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Date de soumission',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Date, plus récent',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Date, plus ancien',
      name: 'submittedAtAsc',
      by: [{ field: 'submittedAt', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
      submittedAt: 'submittedAt',
    },
    prepare({ name, email, submittedAt }) {
      const date = submittedAt
        ? new Date(submittedAt).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : '—'
      return {
        title: name || email || 'Sans nom',
        subtitle: date,
      }
    },
  },
})
