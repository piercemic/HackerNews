module.exports = {
  url: 'https://news.ycombinator.com/',
  elements: {
    acct: 'input[name="acct"]',
    username: 'piercemic',
    headerSelector:'td[bgcolor="#ff6600"]',
    rank: '.rank',
    storylink: '.storylink',
    site: '.sitestr',
    subtext: '.subtext',
    score: '.score',
    navigationTitle:'.hnuser',
    age: '.age',
    hide: '[href="hide"]',
    comments: '[href="item"]',
    guidelines: '[href="newsguidelines.html"]',
    faq: '[href="newsfaq.html"]',
    lists: '[href="lists"]',
    api: '[href="https://github.com/HackerNews/API"]',
    security: '[href="security.html"]',
    legal: '[href="http://www.ycombinator.com/legal/"]',
    apply: '[href="http://www.ycombinator.com/apply/"]',
    contact: '[href="mailto:hn@ycombinator.com"]',
    query: 'input[name="q"]',
    searchBar: '.SearchHeader_label',
    news: '[href="news"]',
    newest: '[href="newest"]',
    front: '[href="front"]',
    comments:'[href="newcomments"]',
    ask: '[href="ask"]',
    show: '[href="show"]',
    jobs: '[href="jobs"]',
    submit: '[href="submit"]',
    login: '[href="login?goto=news"]'
  },
  commands: [{
    itemElements(item) {
      return this.containsText('.rank', '1.');
    }
  }]
};