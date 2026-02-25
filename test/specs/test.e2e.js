import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import AllureReporter from '@wdio/allure-reporter'

describe('My Login application', () => {

    before(async function beforeName() {
        AllureReporter.addStep('Login as Admin');
        await LoginPage.open()
        throw new Error('Test error');
    });

    it('should login with valid credentials', async () => {
        AllureReporter.addStep('Login with valid credentials');
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
    })
    it('should verify the login success', async () => {
        AllureReporter.addStep('Verify the login success');
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})

