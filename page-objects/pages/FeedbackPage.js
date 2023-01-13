import { Selector, t } from "testcafe";
import BasePage from "./BasePage";

class FedbackPage extends BasePage {
    constructor() {
        super()
        this.formName = Selector('#name')
        this.formEmail = Selector('#email')
        this.formSubject = Selector('#subject')
        this.formComment = Selector('#comment')
        this.formSubmit = Selector('input').withAttribute('value', 'Send Message')
        this.formMessage = Selector('div')
    }
}

export default FedbackPage