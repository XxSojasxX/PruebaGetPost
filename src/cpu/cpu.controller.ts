import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CreateCpuDto } from './dto/create-cpu.dto';

@Controller('procesadores')
export class CpuController {
  constructor(private readonly cpuService: CpuService) {}

  @Post()
  create(@Body() procesadores: CreateCpuDto) {
    return procesadores;
  }

  @Get()
  findAll() {
    return this.cpuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cpuService.findOne(id);
  }
  @Get('filtter/:letter')
  findLetter(@Param('letter') letter: string) {
    const filterMarca = this.cpuService.findLetter(letter);
    return filterMarca.length > 0 ? filterMarca : 'no existe';
  }
}
