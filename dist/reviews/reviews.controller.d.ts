import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { User } from 'src/users/entities/user.entity';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto, req: {
        user: User;
    }): Promise<{
        user: {
            id: string;
        };
        title: string;
        year: number;
        genres: string;
        rating: number;
        text: string;
        director: string;
    } & import("./entities/review.entity").Review>;
    findAll(): Promise<import("./entities/review.entity").Review[]>;
    findOne(id: string): Promise<import("./entities/review.entity").Review>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<void>;
    remove(id: string): Promise<void>;
}
