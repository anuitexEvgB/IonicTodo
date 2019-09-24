import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find();
    }
}
