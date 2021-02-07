describe('Search', function() {
  this.tags = ['footer', 'search'];

  describe('when on home page', () => {

    before((browser) => browser.page.news());

    test('should search for relevant articles', function(browser) {
      let homePage = browser.page.news().navigate();

      homePage
        .setValue('@query', 'IoT')
        .submitForm('@query');

      homePage.expect.url().to.contain('?q=IoT');
      homePage.expect.element('@searchBar').text.to.contains('Search');
    });

    after((browser) => browser.end());
  });
});