import { defineField, defineType } from 'sanity'

export const demoSubmissionType = defineType({
  name: 'demoSubmission',
  title: 'Demande de démo',
  type: 'document',
  groups: [
    { name: 'contact', title: 'Coordonnées' },
    { name: 'company', title: 'Entreprise' },
    { name: 'meta', title: 'Métadonnées' },
  ],
  fields: [
    defineField({
      name: 'dirigeant',
      title: 'Nom du dirigeant',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'entreprise',
      title: 'Nom entreprise',
      type: 'string',
      group: 'company',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'effectif',
      title: 'Effectif',
      type: 'string',
      group: 'company',
    }),
    defineField({
      name: 'activite',
      title: 'Activité',
      type: 'string',
      group: 'company',
    }),
    defineField({
      name: 'disponibilites',
      title: 'Dates de disponibilités',
      type: 'text',
      group: 'company',
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
      entreprise: 'entreprise',
      dirigeant: 'dirigeant',
      submittedAt: 'submittedAt',
    },
    prepare({ entreprise, dirigeant, submittedAt }) {
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
        title: entreprise || dirigeant || 'Sans nom',
        subtitle: date,
      }
    },
  },
})
