    //Actions API
    // Click
    await t.click('selector', { options })
    // Double click
    await t.doubleClick('selector', { options })
    //Right click
    await t.rightClick('selector', { options })
    // Drag Element
    await t.drag('selector', 200, 0, { options })
    // Hover
    await t.hover('selector', { options })
    // Select text
    await t.selectText('selector', { options })
    // Type text
    await t.typeText('selector', 'text')
    // Press key on the keyboard
    await t.pressKey('enter')
    // Navigate
    await t.navigateTo('url')
    // Take screenshot
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    // Resize window (before hook mostly)
    await t.resizeWindow(800, 600)

    // Assertions API
    // Deep Equal
    await t.expect('foo').eql('foo', "message", options)
    // Not Deep Equal
    await t.expect('foo').notEql('foo')
    // OK
    await t.expect('foo').ok()
    // Not OK
    await t.expect(true).notOk()
    // Contains
    await t.expect('word').contains('rd')
    // Not contains
    await t.expect('word').notContains('z')
    // Greater or Less than gte, lte - or equal
    await t.expect(10).gt(5)
    await t.expect(10).gte(10)
    await t.expect(10).lt(11)
    await t.expect(10).lte(10)
    //Within
    await t.expect(10).within(1, 100)
    //Not Within
    await t.expect(10).notWithin(1, 100)

    //Documentation: https://testcafe.io/documentation

    //Hooks
    //.before(async t =>{
    //Test setup here. Runs before all tests
    //await runDatabaseReset()
    //await seedTestData

    //.after(async t => {
    //Cleaning test data
    //Logging and sending monitoring data

    //.afterEach(async t => {
    //Runs after each of tests

    //Only & skip
    //Run only marked test from fixture 
    //test.only('My first testcafe test', async t => {

    //Skip marked test from fixture 
    //test.skip('My first testcafe test', async t => {

    //Screenshots
    //await t.takeScreenshot({ fullPage: true })
    //await t.takeElementScreenshot(submit_button)

    //Waiters
    //await t.wait(3000)

    //Sandboxes for practicing:
    //https://devexpress.github.io/testcafe/example/
    //http://zero.webappsecurity.com/index.html

    //parallel execution
    //"test:chrome:5": "testcafe -c 5 chrome ./tests -s takeOnFails=true"

    //How to use xPath in TestCafe (not supported from the box)

    // XPATH to CSS Example
    //first import dependency in the top of the file with test: import xPathToCss from "xpath-to-css";
    // create variable "xPath" with xpath
    //const xPath = `'//*[@id="signin_button"]/i'`
    // create another variable "css" &use the function xPathToCss
    //const css = xPathToCss(xPath)
    //Then it's possible to use "css" as a variable in other steps (it's already css which is supported by TestCafe)