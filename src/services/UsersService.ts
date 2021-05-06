import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


interface IUserCreate {
    email: string;
}

export class UsersService{
    async create( { email }: IUserCreate ){
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExist = await usersRepository.findOne({
            email
        })

        if(userAlreadyExist){
            return userAlreadyExist;
        }
        
        const user = usersRepository.create({
            email
        })

        await usersRepository.save(user);
        return user;


    }
}