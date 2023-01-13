import { Selector, t } from "testcafe";

class FedbackPage {
    constructor() {
        this.formName = Selector('#name')
        this.formEmail = Selector('#email')
        this.formSubject = Selector('#subject')
        this.formComment = Selector('#comment')
        this.formSubmit = Selector('input').withAttribute('value', 'Send Message')
        this.formMessage = Selector('div')
    }
}

export default FedbackPage