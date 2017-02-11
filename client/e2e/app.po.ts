import { browser, element, by } from 'protractor';

export class ExpensesPage {
  navigateTo() {
    return browser.get('/');
  }
}
