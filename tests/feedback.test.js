import { Selector } from "testcafe";

//prettier-ignore
fixture `Feedback form test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can submit feedback via form', async t => {
    const linkToFeedback = Selector('#feedback')
    const formName = Selector('#name')
    const formEmail = Selector('#email')
    const formSubject = Selector('#subject')
    const formComment = Selector('#comment')
    const formSubmit = Selector('input').withAttribute('value', 'Send Message')
    const message = Selector('div').innerText

    await t.click(linkToFeedback)
    await t.typeText(formName, 'NAME', { paste: true })
    await t.typeText(formEmail, 'test@email.com', { paste: true })
    await t.typeText(formSubject, 'SUBJECT', { paste: true })
    await t.typeText(formComment, 'comment', { paste: true })
    await t.click(formSubmit)

    await t.expect(message).contains('Thank you for your comments')
})