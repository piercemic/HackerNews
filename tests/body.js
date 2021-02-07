module.exports = {
  '@tags': ['body'],
  beforeEach: (browser) => {
    browser.page.news().navigate();
  },
  'Should contain item list elements': (browser) => {
    let homePage = browser.page.news();

    homePage.expect.element('@rank').text.to.contain('1.');
    homePage.expect.element('@storylink').to.be.visible;
    homePage.expect.element('@site').to.be.visible;
    homePage.expect.element('@subtext').to.be.visible;
    homePage.expect.element('@score').to.be.visible;
    homePage.expect.element('@navigationTitle').to.be.visible;
    homePage.expect.element('@age').to.be.visible;
    // homePage.expect.element('href').to.have.value.that.startWith('hide');
    // homePage.expect.element('@comments').text.to.contain('comments')
  },
  'Should contain 30 articles when on home page': (browser) => {
    let homePage = browser.page.news();

    homePage.expect.elements('@rank').count.to.equal(30);
  },
  'The background body should be dark grey when on the home page': (browser) => {
    let homePage = browser.page.news();

    homePage.expect.element('#hnmain').to.have.attribute('bgcolor').equals('#f6f6ef');
  }
};
