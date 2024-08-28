import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentsService {
    private commentsRepo;
    constructor(commentsRepo: Repository<Comment>);
    create(userId: string, createCommentDto: CreateCommentDto): Promise<{
        text: string;
        review: {
            id: number;
        };
        user: {
            id: string;
        };
    } & Comment>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCommentDto: UpdateCommentDto): string;
    remove(id: number): string;
}
