const username = 'piercemic';
const {password} = require('../config.js');

/*
  Due to multiple login attempts, I kept getting a captcha checkbox to validate I was a human.
  I wasn't able to figure out how to select the captcha checkbox within the time constaints,
  as I'm assuming this box was designed by google not be checked autonomously.

  NOTE: My password is in a gitignore file
*/
// REFACTOR - Captcha pending
module.exports = {
  '@tags': ['login'],
  'Should render login title when UI and webdriver are synchronous': (browser) => {
    browser
      .url('https://news.ycombinator.com/login')
      .waitForElementVisible('b')
    browser.expect.element('b').text.to.equal('Login');
    browser.saveScreenshot('tests_output/Login_Page.png');
  },
  'Should contain "login" submit when on login page': (browser) => {
    browser.url('https://news.ycombinator.com/login');
    browser.expect.element('input[value="login"]').to.be.present;
  },
  'Should contain create account elements when on login page': (browser) => {
    browser.url('https://news.ycombinator.com/login');
    browser.expect.element('input[value="create account"]').to.be.present;
  },
  'Should give error message when invalid login credentials': (browser) => {
    browser
      .url('https://news.ycombinator.com/login')
      .clearValue('input[name="acct"]')
      .clearValue('input[name="pw"]')
      .click('input[value="login"]')

    browser.expect.element('body').text.to.equal('Bad login.');
  },
  'Should login and logout with an existing user': (browser) => {
    browser
    .deleteCookies()
      .url('https://news.ycombinator.com/login')
      .deleteCookies()
      .setValue('input[name="acct"]', username)
      .setValue('input[name="pw"]', password)
      .click('input[value="login"]')
      // .waitForElementVisible('..recaptcha-checkbox-border')

    // POSSIBLE CAPTCHA SOLUTION
    // const captchaMessage = 'Validation required';
    // if () {
    //   browser
    //     .click('.recaptcha-checkbox-border')
    //     .click('input[value="login"]')
    // }

    browser.expect.element('#me').text.to.equal(username)
    browser.saveScreenshot('tests_output/Login_Page_Logged_In.png');
    browser.click('#logout', 'logout');
    browser.expect.element('#me').text.to.not.equal(username);
  },
  'Should give error message with invalid create account credentials': (browser) => {
    const invalidCreateAccountMessage = 'Usernames can only contain';
    browser
      .url('https://news.ycombinator.com/login')
      .clearValue('input[name="acct"]')
      .clearValue('input[name="pw"]')
      .click('input[value="login"]')

    browser.expect.element('body').text.to.contain(invalidCreateAccountMessage);
  },
  'Should give error message when creating a duplicate account': (browser) => {
    const duplicateAccountMessage = 'That username is taken. Please choose another.';
    browser
      .url('https://news.ycombinator.com/login')
      .setValue('input[name="creating"]input[name="acct"]', username)
      .setValue('input[name="creating"]input[name="pw"]', password)
      .click('input[value="create account"]')

    browser.expect.element('body').text.to.equal(duplicateAccountMessage);
  }
};
