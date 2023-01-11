import { Selector } from "testcafe";

//prettier-ignore
fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can request new password to be sent to his email', async t => {
    // Get selectors
    const signInButton = Selector('#signin_button')
    const linkToForgottenPassword = Selector('a').withText('Forgot your password ?')
    const emailInput = Selector('#user_email')
    const message = Selector('div').innerText
    // Actions
    await t.click(signInButton)
    await t.click(linkToForgottenPassword)
    await t.typeText(emailInput, 'ter@fsd.dfs', { paste: true})
    await t.pressKey('enter')
    // Assertions
    await t.expect(message).contains('ter@fsd.dfs')
    await t.expect(emailInput.exists).notOk()
})