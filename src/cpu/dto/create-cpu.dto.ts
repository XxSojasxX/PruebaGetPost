import {
  IsNotEmpty,
  //IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCpuDto {
  @IsNumberString()
  @IsNotEmpty()
  @MinLength(1)
  id: number;
  @IsString()
  marca: string;
  @IsString()
  @MinLength(2)
  modelo: string;
  @IsNumberString()
  @MinLength(1)
  generacion: number;
  @IsString()
  @IsOptional()
  socket: string;
}
