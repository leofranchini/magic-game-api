import { Controller, Post, Body } from '@nestjs/common';
import { DeckCreatorService } from './deck-creator.service';
import { Deck } from '../deck/schemas/deck.schema';

@Controller('deck-creator')
export class DeckCreatorController {
  constructor(private readonly deckCreatorService: DeckCreatorService) {}

  @Post('create')
  async createDeck(@Body() createDeckDto: { commanderName: string, deckName: string }): Promise<Deck> {
    const { commanderName, deckName } = createDeckDto;
    return this.deckCreatorService.createDeckWithCommander(commanderName, deckName);
  }
}
