import { getAndUpdateModeHandler } from '../../extension';
import { ModeHandler } from '../../src/mode/modeHandler';
import { getTestingFunctions } from '../testSimplifier';
import { cleanUpWorkspace, setupWorkspace } from '../testUtils';

suite.only('shift operator', () => {
  let modeHandler: ModeHandler;

  let { newTest, newTestOnly } = getTestingFunctions();

  setup(async () => {
    await setupWorkspace();
    modeHandler = await getAndUpdateModeHandler();
  });

  teardown(cleanUpWorkspace);

  newTest({
    title: 'basic shift left test',
    start: ['  |zxcv', '  zxcv', '  zxcv'],
    keysPressed: '<<',
    end: ['|zxcv', '  zxcv', '  zxcv'],
  });

  newTest({
    title: 'shift left goto end test',
    start: ['  |zxcv', '  zxcv', '  zxcv'],
    keysPressed: '<G',
    end: ['|zxcv', 'zxcv', 'zxcv'],
  });

  newTest({
    title: 'shift left goto line test',
    start: ['  |zxcv', '  zxcv', '  zxcv'],
    keysPressed: '<2G',
    end: ['|zxcv', 'zxcv', '  zxcv'],
  });

  newTest({
    title: 'shift right goto end test',
    start: ['|zxcv', 'zxcv', 'zxcv'],
    keysPressed: '>G',
    end: ['  |zxcv', '  zxcv', '  zxcv'],
  });

  newTest({
    title: 'shift right goto line test',
    start: ['|zxcv', 'zxcv', 'zxcv'],
    keysPressed: '>2G',
    end: ['  |zxcv', '  zxcv', 'zxcv'],
  });

  newTest({
    title: 'shift block below',
    start: ['|zxcv', 'zxcv', 'zxcv', 'zxcv'],
    keysPressed: 'Vjj>',
    end: ['  |zxcv', '  zxcv', 'zxcv', 'zxcv'],
  });

  newTest({
    title: 'shift block below, then repeat',
    start: ['|zxcv', 'zxcv', 'zxcv', 'zxcv'],
    keysPressed: 'Vjj>.',
    end: ['    |zxcv', '    zxcv', 'zxcv', 'zxcv'],
  });

  newTest({
    title: 'shift block above',
    start: ['|zxcv', 'zxcv', 'zxcv', 'zxcv'],
    keysPressed: 'GVkk>',
    end: ['|zxcv', 'zxcv', '  zxcv', '  zxcv'],
  });

  newTest({
    title: 'shift block above, then repeat',
    start: ['|zxcv', 'zxcv', 'zxcv', 'zxcv'],
    keysPressed: 'GVkk>.',
    end: ['|zxcv', 'zxcv', '    zxcv', '    zxcv'],
  });
});
