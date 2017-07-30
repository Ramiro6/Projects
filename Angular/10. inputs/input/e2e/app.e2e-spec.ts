import { InputPage } from './app.po';

describe('input App', () => {
  let page: InputPage;

  beforeEach(() => {
    page = new InputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
