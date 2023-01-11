import { Selector } from "testcafe"

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    
    .before(async t =>{

    })
    .beforeEach(async t=> {
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)
    })
    .after(async t => {

    })
    .afterEach(async t => {

    })

test.skip('My first testcafe test', async t => {
    const developer_name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const article_text = Selector('#article-header').innerText

    await t.typeText(developer_name_input, 'John')
    await t.click(submit_button)
    await t.expect(article_text).contains('John')
})