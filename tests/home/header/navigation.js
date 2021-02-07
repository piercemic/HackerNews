const assert = require('assert');

module.exports = {
  '@tags': ['nav'],
  beforeEach: (browser) => {
    let homePage = browser.page.news();
    homePage.navigate();
  },
  'Should render webpage title when UI and webdriver are synchronous': (browser) => {
    browser.waitForElementVisible('.hnname')
    browser.expect.element('.hnname').text.to.equal('Hacker News');
    browser.saveScreenshot('tests_output/Hacker_News_Homepage.png');
  },
  'Should contain navigation elements when on home page': (browser) => {
    let homePage = browser.page.news();

    homePage.expect.element('img').to.have.attribute('src', 'https://news.ycombinator.com/y18.gif')
    homePage.expect.element('@news').text.to.equal('Hacker News');
    homePage.expect.element('@newest').text.to.equal('new');
    homePage.expect.element('@front').text.to.equal('past');
    homePage.expect.element('@comments').text.to.equal('comments');
    homePage.expect.element('@ask').text.to.equal('ask');
    homePage.expect.element('@show').text.to.equal('show');
    homePage.expect.element('@jobs').text.to.equal('jobs');
    homePage.expect.element('@submit').text.to.equal('submit');
    homePage.expect.element('@login').text.to.equal('login');
  },
  'Should navigate from home page to "news" path': (browser) => {
    let homePage = browser.page.news();

    homePage.click('@news');
    homePage.expect.url().to.contain('news');
  },
  'Should navigate from home page to "newest" path': (browser) => {
    let homePage = browser.page.news();

    homePage.click('@newest');
    homePage.expect.url().to.contain('newest');
  },
  'Should navigate from home page to "front" path': (browser) => {
    let homePage = browser.page.news();

    homePage.click('@front');
    homePage.expect.url().to.contain('front');
  },
  'Should navigate from home page to "comments" path': (browser) => {
    let homePage = browser.page.news();

    homePage.click('@comments');
    homePage.expect.url().to.contain('comments');
  },
  'Should navigate from home page to "ask" path': (browser) => {
    let homePage = browser.page.news();

    homePage.click('@ask');
    homePage.expect.url().to.contain('ask');
  },
  'Should navigate from home page to "show" path': (browser) => {
    let homePage = browser.page.news();

    homePage.click('@show');
    homePage.expect.url().to.contain('show');
  },
  'Should navigate from home page to "jobs" path': (browser) => {
    let homePage = browser.page.news();

    homePage.click('@jobs');
    homePage.expect.url().to.contain('jobs');
  },
  'Should navigate from home page to "submit" path': (browser) => {
    let homePage = browser.page.news();

    homePage.click('@submit');
    homePage.expect.url().to.contain('submit');
  },
  'Should navigate from home page to "login" path': (browser) => {
    let homePage = browser.page.news();

    homePage.click('@login');
    homePage.expect.url().to.contain('login');
  },
  'Should match existing virtual regression test when home page renders': (browser) => {
    const headerSelector = 'td[bgcolor="#ff6600"]';

    browser.url('https://news.ycombinator.com/')
      .waitForElementVisible(headerSelector)
      .assert.screenshotIdenticalToBaseline(headerSelector, 'hn-header');
  }
}