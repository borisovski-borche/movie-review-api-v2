import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Comment {
    id: number;
    text: string;
    user: User;
    review: Review;
}
