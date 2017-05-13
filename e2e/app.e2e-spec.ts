import { AwesomeCarWashPage } from './app.po';

describe('awesome-car-wash App', () => {
  let page: AwesomeCarWashPage;

  beforeEach(() => {
    page = new AwesomeCarWashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
