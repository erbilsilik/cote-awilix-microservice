module.exports = class UserService {
  constructor({ userRepository }) {
    this.UserRepository = userRepository;
  }

  async getUser() {
    return this.UserRepository.getUser();
  }
};
