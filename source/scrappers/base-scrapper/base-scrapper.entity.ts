import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class News {
  @IsString()
  @IsNotEmpty()
  public headline: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  public image: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  public url: string;
}
