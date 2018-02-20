import { TestProject1Page } from './app.po';

describe('test-project1 App', function() {
  let page: TestProject1Page;

  beforeEach(() => {
    page = new TestProject1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
