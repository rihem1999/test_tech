import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findByUsername(username: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
}
