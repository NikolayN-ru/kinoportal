export class AddActorDto{
    firstName:string;
    lastName:string;
    story:string;
    biography:string;
}

export class AddActorWithImageDto{
    actorDto: AddActorDto
    image: any
}
