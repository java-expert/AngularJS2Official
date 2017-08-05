import { AngularJS2OfficialPage } from './app.po';

describe('angular-js2-official App', () => {
  let page: AngularJS2OfficialPage;

  beforeEach(() => {
    page = new AngularJS2OfficialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
