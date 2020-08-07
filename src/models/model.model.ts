import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";

export enum Status {
  DELETED = 'DELETED',
  ACTIVE = 'ACTIVE'
}

registerEnumType(Status, {
  name: 'Status',
  description: 'Entities status'
});

@ObjectType({ isAbstract: true })
export abstract class Model {
  @Field(type => ID)
  id: string;

  @Field(type => Status)
  status: Status;

  @Field(type => Date)
  createdAt: Date;

  @Field(type => Date)
  updatedAt: Date;
}