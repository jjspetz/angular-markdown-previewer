import { MarkdownPreviewPage } from './app.po';

describe('markdown-preview App', () => {
  let page: MarkdownPreviewPage;

  beforeEach(() => {
    page = new MarkdownPreviewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
