import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Model } from './model.model';
import { User } from './user.model';
import { Republica } from './republica.model';

@ObjectType()
export class Room extends Model {
  @Field()
  name: string;

  @Field(type => Float)
  price?: number;

  // @Field(type => [User], { nullable: 'items' })
  // users: User[];

  // @Field(type => Republica)
  // republica: Republica;
}