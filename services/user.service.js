module.exports = class UserService {
    async signUp(email, username, password) {
        console.log('done');
    }

    async test() {
        return await Promise.resolve('test');
    }
}