describe('Navigation', function() {
  this.tags = ['footer', 'nav'];

  describe('when on home page', () => {

    before((browser) => browser.page.news().navigate());

    test('should contain navigation elements', (browser) => {
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
    });

    after((browser) => browser.end());
  });
});