import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    findAll(): Promise<User[]>;
    findUserById(id: string): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    findCommentsByUser(id: string): Promise<import("../comments/entities/comment.entity").Comment[]>;
    findReviewsByUser(id: string): Promise<import("../reviews/entities/review.entity").Review[]>;
    saveRefreshToken(userId: string, refreshToken: string): Promise<void>;
    deleteRefreshToken(userId: string, refreshToken: string): Promise<void>;
    deleteUser(id: string): Promise<void>;
}
