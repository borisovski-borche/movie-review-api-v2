import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    findAll(): Promise<User[]>;
    findCommentsByUser(req: {
        user: User;
    }): Promise<import("../comments/entities/comment.entity").Comment[]>;
    findReviewsByUser(req: {
        user: User;
    }): Promise<import("../reviews/entities/review.entity").Review[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): Promise<void>;
}
