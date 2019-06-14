import { FirstprjPage } from './app.po';

describe('firstprj App', () => {
  let page: FirstprjPage;

  beforeEach(() => {
    page = new FirstprjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
