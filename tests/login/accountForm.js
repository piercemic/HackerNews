const username = 'piercemic';
const {password} = './lib/config.js'; // Password set to gitignore

describe('Create account form', function() {
  this.tags = ['login', 'form', 'accountForm'];

  describe('when on login page', () => {

    before((browser) => browser.page.login().navigate());

    test('should contain create account elements', (browser) => {
      let loginPage = browser.page.login();

      loginPage.expect.element('input[value="create account"]').to.be.present;
    });

    // Disabled as I need to figure out how to uniquely identify selectors apart from login form
    xtest('should give error message when creating a duplicate account', (browser) => {
      const duplicateAccountMessage = 'That username is taken. Please choose another.';
      let loginPage = browser.page.login();

      loginPage
        .setValue('[name="creating"] [name="acct"]', username)
        .setValue('[name="creating"] input[name="pw"]', password)
        .click('input[value="create account"]')

      loginPage.expect.element('body').text.to.equal(duplicateAccountMessage);
    });

    after((browser) => browser.end());
  });
});