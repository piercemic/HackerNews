const username = 'piercemic';
const {password} = './lib/config.js'; // Password set to gitignore

// Login form tests are currently disabled due to intermittent captcha checkbox.

describe('Login form', function() {
  this.tags = ['login', 'form', 'loginForm'];

  describe('when on login page', () => {

    before((browser) => browser.page.login().navigate());

    test('should render login title when UI and webdriver are synchronous', (browser) => {
      let loginPage = browser.page.login();

      loginPage.expect.element('b').text.to.equal('Login');
      loginPage.saveScreenshot('tests_output/Login_Page.png');
    });

    test('should contain a "login" submit button', (browser) => {
      let loginPage = browser.page.login();

      loginPage.expect.element('input[value="login"]').to.be.present;
    });

    xtest('should give error message with invalid create account credentials', (browser) => {
      let loginPage = browser.page.login();
      const invalidCreateAccountMessage = 'Usernames can only contain';

      loginPage
        .clearForm('@account', '@password')
        .click('input[value="login"]');

      loginPage.expect.element('body').text.to.contain(invalidCreateAccountMessage);
    });

    xtest('should give error message when invalid login credentials', (browser) => {
      let loginPage = browser.page.login();

      loginPage
        .clearValue('input[name="acct"]')
        .clearValue('input[name="pw"]')
        .click('input[value="login"]')

      loginPage.expect.element('body').text.to.equal('Bad login.');
    });

    xtest('should login and logout with an existing user', (browser) => {
      let loginPage = browser.page.login();

      loginPage
        .setValue('input[name="acct"]', username)
        .setValue('input[name="pw"]', password)
        .click('input[value="login"]')
        // .waitForElementVisible('..recaptcha-checkbox-border')

      // POSSIBLE CAPTCHA SOLUTION
      // const captchaMessage = 'Validation required';
      // if () {
      //   loginPage
      //     .click('.recaptcha-checkbox-border')
      //     .click('input[value="login"]')
      // }

      loginPage.expect.element('#me').text.to.equal(username)
      loginPage.saveScreenshot('tests_output/Login_Page_Logged_In.png');
      loginPage.click('#logout', 'logout');
      loginPage.expect.element('#me').text.to.not.equal(username);
    });

    after((browser) => browser.end());
  });
});