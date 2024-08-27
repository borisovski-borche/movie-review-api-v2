import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review) private reviewsRepo: Repository<Review>,
  ) {}

  create(id: string, createReviewDto: CreateReviewDto) {
    return this.reviewsRepo.save({
      ...createReviewDto,
      user: { id },
    });
  }

  findAll() {
    return this.reviewsRepo.find({});
  }

  async findOne(id: number) {
    const foundReview = await this.reviewsRepo.findOne({
      where: { id },
      relations: { comments: true },
    });

    if (!foundReview) throw new NotFoundException('Review not found');

    return foundReview;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const foundReview = await this.findOne(id);

    Object.assign(foundReview, updateReviewDto);

    await this.reviewsRepo.save(foundReview);
  }

  async remove(id: number) {
    const foundReview = await this.findOne(id);

    await this.reviewsRepo.remove(foundReview);
  }

  //Add a like

  //Remove a like
}
