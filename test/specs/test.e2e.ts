/**
 * test with page objects
 */
import LoginPage from '../PageObjects/LoginPage.ts'
import SecurePage from '../PageObjects/SecurePage.ts'
import { expect } from 'chai'



describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        const doesFlashAlertExist = await (await SecurePage.flashAlert).isExisting();
        const flashAlertText = await (await SecurePage.flashAlert).getText();
        await expect(doesFlashAlertExist).to.be.equal(true);
        await expect(flashAlertText).to.contain('You logged into a secure area!');
    })
});

// test suite name
describe.skip('Tutorialspoint application', function(){
    //test case

    afterEach(async function() {
        browser.pause(20000);
    });
    it('Screenshot', async function(){    
       // launch url
       browser.url('https://www.tutorialspoint.com/index.htm')  
       //identify element then enter text
       const e = $("#gsc-i-id1");
       const a = $("#gsc-i-id2")
       e.setValue('WebdriverIO')
       //capture screenshot of page
       //browser.saveScreenshot("screenshot.png")
       await expect(a).toBeExisting();
       
    });
 });

