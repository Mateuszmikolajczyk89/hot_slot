import {DomEl} from './DomEl.esm.js';

let creditsNumber = 100;


class Credits extends DomEl {

    valueCredit(bidValue) {
        if (creditsNumber == 0) {
            return this.DomElements.creditsValue.textContent = 0;
        }
        this.DomElements.creditsValue.textContent -= bidValue;
        creditsNumber = parseInt(this.DomElements.creditsValue.textContent);

    }

    winCredit(winCheck) {
        this.counterOfCredits = 0;
        if (winCheck) {
            const clear = setInterval(() => {
                this.DomElements.creditsValue.textContent = (creditsNumber + ++this.counterOfCredits);
                if (this.counterOfCredits === winCheck) {
                    clearInterval(clear);
                    this.counterOfCredits = 0;
                }
            }, 25);

            creditsNumber = parseInt(this.DomElements.creditsValue.textContent);
        }

    }

    valueNumber() {
        return creditsNumber;
    }

}

export const credits = new Credits();