import { cafe, chooseWhatMakesYouHappy, ItsYou, JMT_CAKE, overSlept, walk, withFriend } from "ASCiiROOM";

const happyDay = (you: ItsYou) => {
    const sleepingBeauty = overSlept(you)

    const refreshingYou = walk(sleepingBeauty)

    const hangout = withFriend(cafe({who: refreshingYou, food: JMT_CAKE}))

    return chooseWhatMakesYouHappy(hangout)
}

happyDay('YOU')
