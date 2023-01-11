import { Selector } from "testcafe";
import { login } from "../helper";

//prettier-ignore
fixture `New payee test`
    .page `http://zero.webappsecurity.com/index.html`

test.before(async t =>{
    await login('username', 'password')
})('User can add new payee to the list', async t => {
    const payBillsTab = Selector('#pay_bills_tab')
    const addNewPayeeTab = Selector('a').withText('Add New Payee')
    const formName = Selector('#np_new_payee_name')
    const formAddress = Selector('#np_new_payee_address')
    const formAccount = Selector('#np_new_payee_account')
    const formPayeeDetails = Selector('#np_new_payee_details')
    const formSubmitButton = Selector('#add_new_payee')
    const message = Selector('#alert_content').innerText

    await t.click(payBillsTab)
    await t.click(addNewPayeeTab)
    await t.typeText(formName, 'name', { paste: true })
    await t.typeText(formAddress, 'address', { paste: true })
    await t.typeText(formAccount, 'account', { paste: true })
    await t.typeText(formPayeeDetails, 'details', { paste: true })
    await t.click(formSubmitButton)
    await t
        .expect(message)
        .contains('successfully created')
})