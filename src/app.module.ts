import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RepublicasModule } from './republicas/republicas.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    RepublicasModule,
  ],
})
export class AppModule {}
