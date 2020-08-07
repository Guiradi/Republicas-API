import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './controllers/app.controller';
import { PrismaService } from './services/prisma.service';
import { UserModule } from './resolvers/user/user.module';
import { RepublicaModule } from './resolvers/republica/republica.module';
import { RoomModule } from './resolvers/room/room.module';
import { DateScalar } from "src/common/scalars/date.scalar";

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      }
  }), 
    UserModule, 
    RepublicaModule, 
    RoomModule,
  ],
  controllers: [AppController],
  providers: [PrismaService, DateScalar]
})
export class AppModule {}
