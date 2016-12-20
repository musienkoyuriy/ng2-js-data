import { JsDataPage } from './app.po';

describe('js-data App', function() {
  let page: JsDataPage;

  beforeEach(() => {
    page = new JsDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
