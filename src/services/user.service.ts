import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findByRepublicaId(id: string): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { republicaId: id },
      // include: {
      //   republica: true,
      //   room: true
      // }
    });
  }
}
