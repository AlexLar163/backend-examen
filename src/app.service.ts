import { Injectable } from '@nestjs/common';

let friends = [
  {
    _id: '62ec821b02acf00dfd1a9f3f',
    isFriend: true,
    picture:
      'https://i.picsum.photos/id/108/536/354.jpg?hmac=zBt9HUG-hs3TUEY2TIZffOZilKlcNT1mOzwd7k2RZ3M',
    age: 21,
    name: 'Mack',
    lastname: 'Weber',
    gender: 'male',
    email: 'mackweber@austex.com',
    telephone: '+1 (931) 493-3456',
    address: '777 Montague Terrace, Beaverdale, Hawaii, 6577',
  },
  {
    _id: '62ec821beb672a522f247ea9',
    isFriend: false,
    picture:
      'https://i.picsum.photos/id/385/536/354.jpg?hmac=vT4PTVhGnZlAi6cVad5HuX3kIw-wvhGrRTMKgh3LxkM',
    age: 36,
    name: 'Ginger',
    lastname: 'Webster',
    gender: 'female',
    email: 'gingerwebster@austex.com',
    telephone: '+1 (824) 418-3126',
    address: '615 Concord Street, Norwood, Northern Mariana Islands, 8326',
  },
  {
    _id: '62ec821b53ddffede3535203',
    isFriend: true,
    picture:
      'https://i.picsum.photos/id/992/536/354.jpg?hmac=ybhvV9HOEe3Mqk1RKg174BpN2D3aVINLpV7IKyV7AeM',
    age: 22,
    name: 'Grant',
    lastname: 'Puckett',
    gender: 'male',
    email: 'grantpuckett@austex.com',
    telephone: '+1 (927) 425-2583',
    address: '345 Underhill Avenue, Toftrees, Missouri, 9061',
  },
  {
    _id: '62ec821b97f44dca13fe6205',
    isFriend: false,
    picture:
      'https://i.picsum.photos/id/250/536/354.jpg?hmac=qb3khzryKWU1ECPob2_1mYZLumW5eJTLSmhJzi1VVSI',
    age: 28,
    name: 'Mayra',
    lastname: 'Donaldson',
    gender: 'female',
    email: 'mayradonaldson@austex.com',
    telephone: '+1 (902) 429-2212',
    address: '980 Lefferts Avenue, Wattsville, Nebraska, 3178',
  },
  {
    _id: '62ec821b666a8ae28e257d44',
    isFriend: true,
    picture:
      'https://i.picsum.photos/id/810/536/354.jpg?hmac=HQ90xkFLuIt4zLaqy23_MLXvjHZv7y8F654fjoE6rkk',
    age: 26,
    name: 'Lessie',
    lastname: 'Rivas',
    gender: 'female',
    email: 'lessierivas@austex.com',
    telephone: '+1 (856) 456-2193',
    address: '764 Dooley Street, Tyhee, California, 5746',
  },
  {
    _id: '62ec821ba95d67f25359c4f8',
    isFriend: true,
    picture:
      'https://i.picsum.photos/id/39/536/354.jpg?hmac=Cz86cU7Bf5NeUkaKYTymLaScsSMuNpDy5iD9q6vCxJE',
    age: 20,
    name: 'Rasmussen',
    lastname: 'Gutierrez',
    gender: 'male',
    email: 'rasmussengutierrez@austex.com',
    telephone: '+1 (825) 544-2241',
    address: '432 Albemarle Road, Elizaville, Oklahoma, 9155',
  },
];

@Injectable()
export class AppService {
  getFriends(): object {
    return friends.filter((friend) => {
      if (friend.isFriend === false) {
        return friend;
      }
    });
  }
  getPhotos(): object {
    return friends;
  }
  getPerfil(): object {
    return {};
  }
  postSearch(dataSearch: string): object {
    if (dataSearch === 'all') {
      return friends.filter((friend) => {
        if (friend.isFriend === true) {
          return friend;
        }
      });
    }
    const searched = friends.filter((friend) => {
      if (friend.name.toLowerCase() === dataSearch.toLowerCase()) {
        if (friend.isFriend === true) {
          return friend;
        }
      }
    });
    return searched;
  }
  deleteFriend(id: string) {
    friends = friends.map((item) => {
      if (item._id === id) {
        item.isFriend = false;
      }
      return item;
    });
    return friends.filter((friend) => {
      if (friend.isFriend === true) {
        return friend;
      }
    });
  }
  addFriend(id: string) {
    friends = friends.map((item) => {
      if (item._id === id) {
        item.isFriend = true;
      }
      return item;
    });
    return friends.filter((friend) => {
      if (friend.isFriend === false) {
        return friend;
      }
    });
  }
  addPerson(body: any): object {
    let flag = true;
    friends = friends.map((item) => {
      if (item._id === body._id) {
        item._id = body._id;
        item.isFriend = body.isFriend;
        item.picture = body.picture;
        item.age = body.age;
        item.name = body.name;
        item.lastname = body.lastname;
        item.gender = body.gender;
        item.email = body.email;
        item.telephone = body.telephone;
        item.address = body.address;
        flag = false;
      }
      return item;
    });
    if (flag) {
      body.isFriend = false;
      friends.push(body);
    }
    return { message: 'Agregado' };
  }
  getAllFriends() {
    return friends;
  }
}
