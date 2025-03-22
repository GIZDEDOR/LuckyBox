export interface IUser {
    id: number;
    username: string;
    luckyboxes: number,
    balance: number
}

export interface UserProps {
  data: IUser;
  setUser: (user: IUser) => void;
}