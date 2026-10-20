export class CreateReviewDto{
    
    userId: String;
    wordId: String;

    state?: number; //Should Be a int
    difficulty?: number; //Should Be a float
    stability?: number; //Should Be a float
}

// model Progress{ // FSRS Card
//   id String @id @default(uuid())
  
//   user User @relation(fields: [userId], references: [id] )
//   userId String

//   word Vocab @relation(fields: [wordId], references: [id])
//   wordId String

//   state Int @default(0)
//   difficulty Float @default(0.0)
//   stability Float @default(0.0)

//   last_review DateTime?
//   dueDate DateTime @default(now())

//   @@unique([userId, wordId])
//   @@index([userId, dueDate])
// }