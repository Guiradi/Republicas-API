import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { PrismaModule } from './modules/prisma/prisma.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    }
  }), 
    PrismaModule, 
    UserModule,
  ],
  providers: [PrismaService],
  controllers: [AppController]
})
export class AppModule { }
