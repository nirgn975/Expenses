import { browser, element, by } from 'protractor';

export class ExpensesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('exp-root h1')).getText();
  }
}
