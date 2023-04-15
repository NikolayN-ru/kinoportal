import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actor{

    @ApiProperty()
    @PrimaryGeneratedColumn()
    actorId: number;

    @ApiProperty()
    @Column()
    firstName: string;

    @ApiProperty()
    @Column()
    lastName: string;

    @ApiProperty()
    @Column("text", {nullable: true})
    story: string;

    @ApiProperty()
    @Column("text", {nullable: true})
    biography: string;

    @ApiProperty()
    @Column({nullable: true})
    photo: string;
}