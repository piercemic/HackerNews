const assert = require('assert');

module.exports = {
  '@tags': ['footer'],
  beforeEach: (browser) => {
    let homePage = browser.page.news();
    homePage.navigate();
  },
  'Should contain navigation elements when on home page': (browser) => {
    let homePage = browser.page.news();

    homePage.expect.element('@guidelines').text.to.contains('Guidelines')
    homePage.expect.element('@faq').text.to.contains('FAQ')
    homePage.expect.element('@lists').text.to.contains('Lists')
    homePage.expect.element('@api').text.to.contains('API')
    homePage.expect.element('@security').text.to.contains('Security')
    homePage.expect.element('@legal').text.to.contains('Legal')
    homePage.expect.element('@apply').text.to.contains('Apply to YC')
    homePage.expect.element('@contact').text.to.contains('Contact')
    homePage.expect.element('@query').to.be.visible;
  },
  'Should contain search for relevant articles when enter a search': (browser) => {
    let homePage = browser.page.news();

    homePage
      .setValue('input[name="q"]', 'IoT')
      .keys(homePage.Keys.ENTER);

    homePage.expect.url().to.contain('?q=IoT');
    homePage.expect.element('@searchBar').text.to.contains('Search');
  }
};
