import { Selector, t } from "testcafe";

class FeedbackPage {
    formName: Selector = Selector('#name')
    formEmail: Selector = Selector('#email')
    formSubject: Selector= Selector('#subject')
    formComment: Selector = Selector('#comment')
    formSubmit: Selector = Selector('input').withAttribute('value', 'Send Message')
    formMessage: Selector = Selector('div')

    async submitFeedback(t: TestController) {
        await t
            .typeText(this.formName, "name", { paste: true, replace: true })
            .typeText(this.formEmail, "email@test.com", { paste: true, replace: true })
            .typeText(this.formSubject, "subject", { paste: true, replace: true })
            .typeText(this.formComment, "comment", { paste: true, replace: true })
            .click(this.formSubmit)
    }
}

export default FeedbackPage