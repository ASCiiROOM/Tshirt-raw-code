export type ItsYou = string

export const ItsYou = (you: ItsYou) => you
export const sayHelloToBoss = (you: ItsYou) => you
export const reportWriting = (you: ItsYou) => you
export const meeting = (you: ItsYou) => you
export const seminar = (you: ItsYou) => you
export const ppt = (you: ItsYou) => you


export const overSlept = (you: ItsYou) => you
export const walk = (you: ItsYou) => you
export const cafe = (params: {who: ItsYou, food: typeof JMT_CAKE}) => params.who
export const withFriend = (you: ItsYou) => you
export const JMT_CAKE = 'cake' as const
export const chooseWhatMakesYouHappy = (you: ItsYou) => you
