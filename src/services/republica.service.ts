import { Injectable } from '@nestjs/common';
import { Republica } from 'src/models/republica.model';
import { PrismaService } from './prisma.service';

@Injectable()
export class RepublicaService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneById(id: string): Promise<Republica> {
    return this.prisma.republica.findOne({
      where: { id },
      include: {
        users: true,
        rooms: true
      }
    });
  }
}
