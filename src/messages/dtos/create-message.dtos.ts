import { IsString } from "class-validator";
import { table } from "console";

export class CreateMessageDto
{
    @IsString()
    content: string;
}


