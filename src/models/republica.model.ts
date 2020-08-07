import { Field, ObjectType } from "@nestjs/graphql";
import { Model } from "./model.model";
import { Room } from "./room.model";
import { User } from "./user.model";

@ObjectType()
export class Republica extends Model {
  @Field()
  name: string;

  @Field({ nullable: true })
  logo?: string;

  @Field(type => [Room], { nullable: 'items' })
  rooms: Room[];

  @Field(type => [User], { nullable: 'items' })
  users: User[];
}