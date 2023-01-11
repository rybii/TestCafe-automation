import { Selector } from "testcafe";

//prettier-ignore
fixture `Search box test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can search for information using search box', async t => {
    const searchBox = Selector('#searchTerm')
    const resultsTitle = Selector('h2')
    const linkText = Selector('div').innerText

    await t.typeText(searchBox, 'online bank', { paste: true })
    await t.pressKey('enter')

    await t.expect(resultsTitle.exists).ok()
    await t.expect(searchBox.exists).ok()
    await t.expect(linkText).contains('Zero - Free Access to Online Banking')
})