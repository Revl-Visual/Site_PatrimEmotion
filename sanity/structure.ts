import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Formulaire contact
      S.listItem()
        .title('Contact')
        .child(
          S.documentList()
            .title('Messages contact')
            .filter('_type == "contactSubmission"')
            .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
        ),
      // Demandes de démo
      S.listItem()
        .title('Demandes de démo')
        .child(
          S.documentList()
            .title('Demandes de démo')
            .filter('_type == "demoSubmission"')
            .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() !== 'contactSubmission' &&
          item.getId() !== 'demoSubmission'
      ),
    ])
