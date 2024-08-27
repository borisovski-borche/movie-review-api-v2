import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
export declare class ReviewsService {
    private reviewsRepo;
    constructor(reviewsRepo: Repository<Review>);
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
    } & Review>;
    findAll(): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<void>;
    remove(id: number): Promise<void>;
}
