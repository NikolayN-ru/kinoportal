import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo{

    @PrimaryGeneratedColumn()
    photoId: number

    @Column({unique: true})
    photoName:string

    @CreateDateColumn()
    createdAt:Date;

    @Column({nullable: true})
    assenceTable: string;

    @Column({nullable: true})
    assenceId: number
}