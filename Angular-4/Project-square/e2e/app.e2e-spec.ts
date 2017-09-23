import { ProjectSquarePage } from './app.po';

describe('project-square App', () => {
  let page: ProjectSquarePage;

  beforeEach(() => {
    page = new ProjectSquarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
