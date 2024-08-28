"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const review_entity_1 = require("./entities/review.entity");
const typeorm_2 = require("typeorm");
let ReviewsService = class ReviewsService {
    constructor(reviewsRepo, manager) {
        this.reviewsRepo = reviewsRepo;
        this.manager = manager;
    }
    create(id, createReviewDto) {
        return this.reviewsRepo.save({
            ...createReviewDto,
            user: { id },
        });
    }
    findAll() {
        return this.reviewsRepo.find({});
    }
    async findOne(id) {
        const foundReview = await this.reviewsRepo.findOne({
            where: { id },
            relations: {
                comments: true,
                user: true,
            },
        });
        delete foundReview.user.refreshTokens;
        delete foundReview.user.email;
        if (!foundReview)
            throw new common_1.NotFoundException('Review not found');
        return foundReview;
    }
    async update(id, updateReviewDto) {
        const foundReview = await this.findOne(id);
        Object.assign(foundReview, updateReviewDto);
        await this.reviewsRepo.save(foundReview);
    }
    async remove(id) {
        const foundReview = await this.findOne(id);
        await this.reviewsRepo.remove(foundReview);
    }
    async toggleLikeDislike(userId, reviewId, type) {
        const { likeAdded, dislikeAdded } = await this.checkLikeDislike(reviewId, userId);
        if (!likeAdded && !dislikeAdded) {
            if (type === 'LIKE') {
                await this.manager.query('UPDATE review SET likes = array_append(likes, $1) WHERE review.id = $2', [userId, reviewId]);
            }
            else {
                await this.manager.query('UPDATE review SET dislikes = array_append(dislikes, $1) WHERE review.id = $2', [userId, reviewId]);
            }
        }
        else if (likeAdded) {
            if (type === 'LIKE') {
                await this.manager.query('UPDATE review SET likes = array_remove(likes, $1) WHERE review.id = $2', [userId, reviewId]);
            }
            if (type === 'DISLIKE') {
                await this.manager.query('UPDATE review SET likes = array_remove(likes, $1) WHERE review.id = $2', [userId, reviewId]);
                await this.manager.query('UPDATE review SET dislikes = array_append(likes, $1) WHERE review.id = $2', [userId, reviewId]);
            }
        }
        else if (dislikeAdded) {
            if (type === 'DISLIKE') {
                await this.manager.query('UPDATE review SET dislikes = array_remove(dislikes, $1) WHERE review.id = $2', [userId, reviewId]);
            }
            if (type === 'LIKE') {
                await this.manager.query('UPDATE review SET dislikes = array_remove(likes, $1) WHERE review.id = $2', [userId, reviewId]);
                await this.manager.query('UPDATE review SET likes = array_append(likes, $1) WHERE review.id = $2', [userId, reviewId]);
            }
        }
        return this.checkLikeDislike(reviewId, userId);
    }
    async checkLikeDislike(reviewId, userId) {
        const isLiked = await this.manager.query('SELECT * FROM review r WHERE r.id = $1 AND $2 = ANY(r.likes)', [reviewId, userId]);
        const isDisliked = await this.manager.query('SELECT * FROM review r WHERE r.id = $1 AND $2 = ANY(r.dislikes)', [reviewId, userId]);
        return {
            likeAdded: !!isLiked.length,
            dislikeAdded: !!isDisliked.length,
        };
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.EntityManager])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map