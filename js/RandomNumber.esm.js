class RandomNumber {
    random(toHowMany, minimum = 0) {

        return Math.random() * toHowMany + minimum;

    };
}

export const randomNumber = new RandomNumber();