import { type SchemaTypeDefinition } from 'sanity'
import { contactSubmissionType } from './contactSubmission'
import { demoSubmissionType } from './demoSubmission'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contactSubmissionType, demoSubmissionType],
}
