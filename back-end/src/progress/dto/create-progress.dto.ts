export class CreateProgressDto{
    
    userId: String;
    wordId: String;

    state?: number; //Should Be a int
    difficulty?: number; //Should Be a float
    stability?: number; //Should Be a float
}