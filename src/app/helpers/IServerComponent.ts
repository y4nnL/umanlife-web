import { Observable } from 'rxjs/Observable';

export interface IServerComponent {
  serverObservable: Observable<any>;
}
