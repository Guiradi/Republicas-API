import { Field, HideField, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Model } from './model.model';
import { Room } from './room.model';
import { Republica } from './republica.model';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

export enum HomeSituation {
  MORADOR = 'MORADOR',
  EXMORADOR = 'EXMORADOR'
}

registerEnumType(HomeSituation, {
  name: 'HomeSituation',
  description: 'User home situation',
});

@ObjectType()
export class User extends Model {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field({ nullable: true })
  photo?: string;

  @Field()
  email: string;

  @HideField()
  password: string;

  @Field(type => Role)
  role: Role;

  @Field(type => HomeSituation)
  situation: HomeSituation;

  // @Field(type => Room)
  // room: Room;

  // @Field(type => Republica)
  // republica: Republica;
}