import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { EntityManager, Repository } from 'typeorm';
import { GetReviewsQuery } from './reviews.model';
export declare class ReviewsService {
    private reviewsRepo;
    private manager;
    constructor(reviewsRepo: Repository<Review>, manager: EntityManager);
    create(id: string, createReviewDto: CreateReviewDto): Promise<{
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
    } & Review>;
    findAll(query: GetReviewsQuery): Promise<{
        reviews: Review[];
        totalCount: number;
    }>;
    findOne(id: number): Promise<Review>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<void>;
    remove(id: number): Promise<void>;
    toggleLikeDislike(userId: string, reviewId: number, type: 'LIKE' | 'DISLIKE'): Promise<{
        likeAdded: boolean;
        dislikeAdded: boolean;
    }>;
    checkLikeDislike(reviewId: number, userId: string): Promise<{
        likeAdded: boolean;
        dislikeAdded: boolean;
    }>;
}
