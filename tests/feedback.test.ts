import { Selector } from "testcafe";
import FedbackPage from "../page-objects/pages/FeedbackPage";

const feedbackPage = new FedbackPage()
//prettier-ignore
fixture `Feedback form test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can submit feedback via form', async t => {
    const linkToFeedback = Selector('#feedback')

    await t.click(linkToFeedback)
    await t.typeText(feedbackPage.formName, 'NAME', { paste: true })
    await t.typeText(feedbackPage.formEmail, 'test@email.com', { paste: true })
    await t.typeText(feedbackPage.formSubject, 'SUBJECT', { paste: true })
    await t.typeText(feedbackPage.formComment, 'comment', { paste: true })
    await t.click(feedbackPage.formSubmit)
    await t
        .expect(feedbackPage.formMessage.innerText)
        .contains('Thank you for your comments')
})