import { ExpensesPage } from './app.po';

describe('expenses App', function() {
  let page: ExpensesPage;

  beforeEach(() => {
    page = new ExpensesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
