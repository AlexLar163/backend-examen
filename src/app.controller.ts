import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getFriends')
  getFriends(): object {
    return this.appService.getFriends();
  }
  @Get('getPhotos')
  getPhotos(): object {
    return this.appService.getPhotos();
  }
  @Get('getPerfil')
  getPerfil(): object {
    return this.appService.getPerfil();
  }
  @Get('postSearch/:name')
  postSearch(@Param('name') name: string): object {
    return this.appService.postSearch(name);
  }
  @Get('deleteFriend/:id')
  deleteFriend(@Param('id') id: string): object {
    return this.appService.deleteFriend(id);
  }
  @Get('addFriend/:id')
  addFriend(@Param('id') id: string): object {
    return this.appService.addFriend(id);
  }
  @Post('addPerson')
  addPerson(@Body() body: any): object {
    return this.appService.addPerson(body);
  }
  @Get('getAllFriends')
  getAllFriends(): object {
    return this.appService.getAllFriends();
  }
}
