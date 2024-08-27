import { Review } from 'src/reviews/entities/review.entity';
import { Comment } from 'src/comments/entities/comment.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    refreshTokens: string[];
    reviews: Review[];
    comments: Comment[];
}
