import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { procesador } from './interfaces/prodesadores';

@Injectable()
export class CpuService {
  procesadores: procesador[] = [
    { id: 1, marca: 'Intel', modelo: 'I5', generacion: 12, socket: 'LGA1700' },
    { id: 2, marca: 'AMD', modelo: 'Ryzen 7', generacion: 3000, socket: 'AM4' },
    { id: 3, marca: 'Intel', modelo: 'I7', generacion: 13, socket: 'LGA1700' },
    { id: 4, marca: 'AMD', modelo: 'Ryzen 5', generacion: 7000, socket: 'AM5' },
    { id: 5, marca: 'Intel', modelo: 'I5', generacion: 11, socket: 'LGA1200' },
  ];

  @Get()
  findAll() {
    return this.procesadores;
  }

  findOne(id) {
    const res = this.procesadores.find((objeto) => objeto.id === parseInt(id));
    if (!res) throw new NotFoundException('No existe');
    return res;
  }

  findLetter(letter: string): procesador[] {
    const filterLetter = this.procesadores.filter((obj) =>
      obj.marca.startsWith(letter),
    );
    return filterLetter;
  }
}
