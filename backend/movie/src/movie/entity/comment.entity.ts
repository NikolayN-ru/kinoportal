import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {Review} from "./review.entity";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(type => Review, review => review.comments)
    review: Review;
}