export interface ISendMessage {
    username: string;
    message: string;
}

export interface IGetMessage {
    message: string;
    author: string;
    datetime: string;
    _id: string;
}