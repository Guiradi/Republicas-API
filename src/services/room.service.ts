import { Injectable } from '@nestjs/common';
import { Room } from 'src/models/room.model';
import { PrismaService } from './prisma.service';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async findByRepublicaId(id: string): Promise<Room[]> {
    return this.prisma.room.findMany({
      where: { republicaId: id },
      // include: {
      //   republica: true,
      //   users: true
      // }
    });
  }
}
