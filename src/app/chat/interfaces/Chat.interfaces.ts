export interface IChat {
  text: string
  sourceDocuments: SourceDocument[]
}

export interface SourceDocument {
  pageContent: string
  metadata: Metadata
}

export interface Metadata {
  "loc.lines.from": number
  "loc.lines.to": number
  source: string
}
