import { Module } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service.js';
import { VocabularyController } from './vocabulary.controller.js';

@Module({
  controllers: [VocabularyController],
  providers: [VocabularyService],
})
export class VocabularyModule {}
