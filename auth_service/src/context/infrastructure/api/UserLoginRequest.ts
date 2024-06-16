type UserLoginDTO = {
    username: string;
    password: string;
};

export default interface UserLoginRequest extends Express.Request {
    body: UserLoginDTO;
}
