module.exports = class UserRepository {
  constructor({
    user
  }) {
      this.User = user;
  }

  getUser() {
    // return this.User.find({}).exec()
    return { name: 'John', phoneNumber: '923923' };
  }
};
