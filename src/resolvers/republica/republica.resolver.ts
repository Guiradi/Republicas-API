import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { RepublicaIdArgs } from "src/models/args/republica-id.args";
import { Republica } from "src/models/republica.model";
import { Room } from "src/models/room.model";
import { User } from "src/models/user.model";
import { RepublicaService } from "src/services/republica.service";
import { RoomService } from "src/services/room.service";
import { UserService } from "src/services/user.service";

@Resolver(of => Republica)
export class RepublicaResolver {
  constructor(
    private readonly republicaService: RepublicaService,
    private readonly roomService: RoomService,
    private readonly userService: UserService
  ) {}

  @Query(returns => Republica)
  async republica(@Args() input: RepublicaIdArgs): Promise<Republica> {
    return this.republicaService.findOneById(input.republicaId);
  }

  @ResolveField('rooms')
  async rooms(@Parent() republica: Republica): Promise<Room[]> {
    return this.roomService.findByRepublicaId(republica.id);
  }

  @ResolveField('users')
  async users(@Parent() republica: Republica): Promise<User[]> {
    return this.userService.findByRepublicaId(republica.id);
  }
}