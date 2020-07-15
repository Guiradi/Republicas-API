import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Republica } from './interfaces/republica.interface';

@Resolver()
export class RepublicasResolver {
  repulicasThatReallyShouldBeInADb = [
    { id: 0, description: 'República semeada' },
  ];

  @Query('republicas')
  getRepublicas(): Republica[] {
    return this.repulicasThatReallyShouldBeInADb;
  }

  @Mutation()
  createRepublica(@Args('description') description: string): Republica {
    const newRepublica: Republica = {
      id: this.repulicasThatReallyShouldBeInADb.length,
      description,
    };

    this.repulicasThatReallyShouldBeInADb.push(newRepublica);

    return newRepublica;
  }
}
