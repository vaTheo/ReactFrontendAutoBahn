export interface IUserPoints{
  nbPeage: {type : number}; //Count the number of peage the player goes through
  nbCardFail: {type : number};//Count the number of time the player guess the wrong card
  nbCardWin: {type : number}; //Count the number of time the player guess the good card
  nbgameWin: {type : number}; //Count the number of win games
  nbGameAbandoned: {type : number}; //Count the number of games abandoned
  nbGameStarted: {type : number}; //Count the number of game started
  nbGameStardedWithAlchool: {type : number}; //Count the number of game started with alcool
  nbRedSelected:{type : number}; // Count the number selected red card by the player
  nbBlackSelected:  {type : number}; // Count the number selected black card by the player
  nbArriveToLastCard :  {type : number}; // Count the number of time arrive to the last card
  autoBahnXCard: {type: []}
}
export interface IupdateScoreReq{
    userPoints: Partial<IUserPoints>;
}
export interface IresetScoreReq{
    userPoints: Partial<IUserPoints>;
}
export interface IregisterReq {
  username: string;
  password: string;
  userPoints: object;
}
export interface IloginReq {
  username: string;
  password: string;
}
export interface IlogoutReq {
  username: string;
}
export interface IgameStartReq {
  IDPlaying: string;
  IDAdmin: string;
  nuberCardAutobahn: number;
}
export interface IgameEndReq {
  gameID: number;
  IDPlaying: string;
  IDAdmin: string;
  endTime: string;
  nuberCardAutobahn: number;
  userPoints: IUserPoints;
}

