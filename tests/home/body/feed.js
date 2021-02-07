describe('Feed', function() {
  this.tags = ['body', 'feed'];

  describe('when on home page', () => {

    before((browser) => browser.page.news().navigate());

    test('should contain 30 posts', (browser) => {
      let homePage = browser.page.news();

      homePage.expect.elements('@rank').count.to.equal(30);
    });

    test('should have a light grey background', (browser) => {
      let homePage = browser.page.news();

      homePage.expect.element('#hnmain').to.have.attribute('bgcolor').equals('#f6f6ef');
    });

    after((browser) => browser.end());
  });
});
