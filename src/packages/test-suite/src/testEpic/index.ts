import { Epic, ActionsObservable, StateObservable } from 'redux-observable';
import { AnyAction } from 'redux';
import { Subject } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

export default (
  epic: Epic,
  count: number,
  inputAction: AnyAction,
  state: {},
  callback: (actions: AnyAction[]) => void,
) => {
  const actions = new Subject<AnyAction>();
  const actions$ = new ActionsObservable(actions);
  const state$ = new StateObservable(new Subject(), state);
  epic(actions$, state$, {})
    .pipe(take(count), toArray())
    .subscribe(callback);
  actions.next(inputAction);
};
