export class UserModel {
  constructor(
    public userId?: string,
    public userName?: string,
    public isAdmin?: boolean,
    public userCode?: string,
    public email?: string,
    public avatar?: string,
    public token?: string,
  ) {
  }

  static getLoginUser() {
    const user = new UserModel();
    Object.assign(user, {
      id: '1233',
      userName: 'xiaobaik',
      avatar: './assets/tmp/img/avatar.jpg',
      email: 'cipchk@qq.com',
      token: '123456789',
    });
    return user;
  }

}
