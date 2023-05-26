import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Review} from "./review.entity";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    parentId: number;

    @ManyToOne(type => Review,
            review => review.comments,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        })
    review: Review;
}