import { Controller, Get, Post, Body } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateLibraryDto } from './create-library.dto'

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get()
  getLibrary() {
    return this.libraryService.getLibrary();
  }
  @Post('/save')
  async setLibrary(@Body() createLibraryDto: CreateLibraryDto) {
    return await this.libraryService.saveLibrary(createLibraryDto);
  }
  @Post('/delete')
  async deleteLibrary(@Body() createLibraryDto: CreateLibraryDto) {
    return await this.libraryService.deleteLibrary(createLibraryDto);
  }
}
