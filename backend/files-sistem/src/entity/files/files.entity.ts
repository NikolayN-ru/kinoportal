import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FilesEntity{

    @PrimaryGeneratedColumn()
    fileId: number

    @Column()
    fileName:string

    @CreateDateColumn()
    createdAt:Date;

    @Column({nullable: true})
    assenceTable: string;

    @Column({nullable: true})
    assenceId: number
}