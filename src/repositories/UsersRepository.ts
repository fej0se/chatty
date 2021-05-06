import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/Users";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {

}