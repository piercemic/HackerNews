module.exports = {
  url: 'https://news.ycombinator.com/login',
  elements: {
    account: 'input[name="acct"]',
    password: 'input[name="pw"]'
  },
  commands: [{
    clearForm: function(account, password) {
      return this
        .clearValue(account)
        .clearValue(password);
    }
  }]
};