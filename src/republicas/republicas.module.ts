import { Module } from '@nestjs/common';
import { RepublicasResolver } from "./republicas.resolver";

@Module({
  providers: [RepublicasResolver],
  exports: [RepublicasResolver]
})

export class RepublicasModule {}
