import { ajax } from 'rxjs/ajax'

export type TEpicDependencies = {
  getJSON: typeof ajax.getJSON,
  ajax: typeof ajax,
}
