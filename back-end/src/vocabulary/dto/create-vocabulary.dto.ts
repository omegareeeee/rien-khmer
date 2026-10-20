export class CreateVocabularyDto{
    khmer: string;
    english: string;

    pronounce?: string;
    imageUrl?: string;
}

// model Vocab{
//   id String @id @default(uuid())

//   khmer String
//   english String
//   pronounce String?
//   imageUrl String? //TODO could this be an url
  
//   progress Progress[]
// }
