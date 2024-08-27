import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Review {
    id: number;
    title: string;
    year: number;
    genres: string;
    rating: number;
    text: string;
    director: string;
    likes: number;
    dislikes: number;
    user: User;
    comments: Comment[];
}
