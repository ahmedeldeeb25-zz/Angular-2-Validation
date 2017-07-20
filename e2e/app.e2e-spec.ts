import { AngularFormAppPage } from './app.po';

describe('angular-form-app App', () => {
  let page: AngularFormAppPage;

  beforeEach(() => {
    page = new AngularFormAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
