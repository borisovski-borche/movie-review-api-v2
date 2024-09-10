import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { User } from 'src/users/entities/user.entity';
import { AddLikeDislikeDto } from './dto/add-dislike.dto';
import { GetReviewsQuery } from './reviews.model';
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
        poster: string;
    } & import("./entities/review.entity").Review>;
    findAll(query: GetReviewsQuery): Promise<{
        reviews: import("./entities/review.entity").Review[];
        totalCount: number;
    }>;
    findOne(id: string): Promise<import("./entities/review.entity").Review>;
    addLike(id: string, req: {
        user: User;
    }, body: AddLikeDislikeDto): Promise<{
        likeAdded: boolean;
        dislikeAdded: boolean;
    }>;
    getLikeDislikeCount(id: string, req: {
        user: User;
    }): Promise<{
        likeAdded: boolean;
        dislikeAdded: boolean;
    }>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<void>;
    remove(id: string): Promise<void>;
}
