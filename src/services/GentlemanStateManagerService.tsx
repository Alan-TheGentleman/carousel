import { AlertMessage } from "models";
import { Subject } from "rxjs";
const subject = new Subject<AlertMessage>();

export const GentlemanStateManagerService = {
  setData: (d: AlertMessage) => subject.next(d),
  getData: () => subject.asObservable(),
};
