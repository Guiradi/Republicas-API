import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query()
  helloWorld(): string {
    return 'Hello World!';
  }
}