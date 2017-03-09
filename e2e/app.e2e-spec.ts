import { OdysseyprimePage } from './app.po';

describe('odysseyprime App', function() {
  let page: OdysseyprimePage;

  beforeEach(() => {
    page = new OdysseyprimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
