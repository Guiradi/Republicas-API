import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { RepublicaService } from 'src/services/republica.service';
import { RepublicaResolver } from "./republica.resolver";

@Module({
  providers: [RepublicaResolver, RepublicaService, PrismaService]
})
export class RepublicaModule {}