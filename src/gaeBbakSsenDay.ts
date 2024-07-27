import { ItsYou, meeting, ppt, reportWriting, sayHelloToBoss, seminar } from "ASCiiROOM";

const gaeBbakSsenDay = (you: ItsYou) => {
    const youAtWork = sayHelloToBoss(you)
    const youBeforeLunch = reportWriting(youAtWork)

    const youAfterLunch = meeting(youBeforeLunch)
    const youJollaTired = seminar(youAfterLunch)

    const nowYouGoHome = ppt(youJollaTired)

    return nowYouGoHome
}

gaeBbakSsenDay('YOU')
