import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from '../../services/prisma.service';
// import { CreateUserDto } from "../user/dto/create-user.dto";
// import { User } from "../user/interfaces/user.interface"

@Resolver() 
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  // @Query('user')
  // async getUser(@Args('id') id: string): Promise<User> {
  //   try {
  //     return await this.prisma.user.findOne({ where: { id: +id } });
  //   } catch (error) {
  //     console.error(error)
  //     throw new Error('Erro ao buscar usuário!')
  //   }
  // }
  
  // @Query('users')
  // async getUsers(): Promise<User[]> {
  //   try {
  //     return await this.prisma.user.findMany();
  //   } catch (error) {
  //     console.error(error)
  //     throw new Error('Erro ao buscar usuários!')
  //   }
  // }

  // @Mutation('createUser')
  // async createUser(@Args('input') input: CreateUserDto): Promise<User> {
  //   try {
  //     return await this.prisma.user.create({ data: input });
  //   } catch (error) {
  //     console.error(error)
  //     throw new Error('Erro ao buscar usuários!')
  //   }
  // }
}