import { TestWindow } from '@stencil/core/testing';
import { GradientBox } from './gradient-box';

describe('gradient-box', () => {
  it('should build', () => {
    expect(new GradientBox()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLGradientBoxElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [GradientBox],
        html: '<gradient-box></gradient-box>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
