import { browser, by, element } from 'protractor';

export class ExpensesPage {
  navigateTo() {
    return browser.get('/');
  }
}
