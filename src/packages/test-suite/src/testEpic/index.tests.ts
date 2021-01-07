import { Epic, ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';
import { AnyAction } from 'redux';

import testEpic from './index';

describe('test-suite::testEpic', () => {
  describe('Using Input Action', () => {
    const inputAction: AnyAction = { type: 'PING' };
    const outputAction: AnyAction = { type: 'PONG' };
    const epic: Epic = action$ => action$.pipe(
      ofType(inputAction.type),
      mapTo(outputAction),
    );

    it('With an unknown action, Epic returns empty actions', (done) => {
      const emptyAction: AnyAction = { type: '' };
      const expectedActions = [];
      testEpic(epic, expectedActions.length, emptyAction, {}, (actions) => {
        expect(expectedActions.length).toBe(actions.length);
        done();
      });
    });

    it('With a know action, Epic returns right actions', (done) => {
      const expectedActions = [outputAction];

      testEpic(epic, expectedActions.length, inputAction, {}, (actions) => {
        expect(expectedActions.length).toBe(actions.length);
        expect(actions).toEqual(
          expect.arrayContaining([
            expect.objectContaining(outputAction),
          ]),
        )
        done();
      });
    });
  });

  describe('Using Input State and Action', () => {
    it('Uses state params', (done) => {
      const inputAction: AnyAction = { type: 'INPUT_ACTION' };
      const outputAction: AnyAction = { type: 'OUTPUT_ACTION' };

      const epic: Epic = (action$, state$) => action$.pipe(
        ofType(inputAction.type),
        mapTo({
          ...outputAction,
          ...state$.value,
        }),
      );

      const inputState = { id: 0 };
      const expectedActions = [{
        ...outputAction,
        ...inputState,
      }];

      testEpic(epic, expectedActions.length, inputAction, inputState, (actions) => {
        expect(expectedActions).toStrictEqual(actions);
        done();
      });
    });
  });
});
