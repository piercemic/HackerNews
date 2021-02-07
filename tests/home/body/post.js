describe('Post', function() {
  this.tags = ['body', 'post'];

  describe('when on home page', () => {

    before((browser) => browser.page.news().navigate());

    test('should contain all elements', (browser) => {
      let homePage = browser.page.news();

      homePage.expect.element('@rank').text.to.contain('1.');
      homePage.expect.element('@storylink').to.be.visible;
      homePage.expect.element('@site').to.be.visible;
      homePage.expect.element('@subtext').to.be.visible;
      homePage.expect.element('@score').to.be.visible;
      homePage.expect.element('@navigationTitle').to.be.visible;
      homePage.expect.element('@age').to.be.visible;
    });

    after((browser) => browser.end());
  });
});