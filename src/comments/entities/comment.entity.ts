import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Review, (review) => review.comments)
  review: Review;
}
