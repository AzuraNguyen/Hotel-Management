class User {
    constructor(user, password){
        this.user = user;
        this.password = password;
    }
}
var user_1 = new User("thinhvt45", "thinh456");
var user_2 = new User("thinhvt78", "thinh456");
var user_3 = new User("thinhvt12", "thinh123");
var user_4 = new User("thinhvt34", "thinh456");

const ListUser = [
    user_1,
    user_2,
    user_3,
    user_4
];

export default ListUser;