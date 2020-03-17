export class Page {
  id: number;
  name: string;
  data: string[];
  actions: Actions[];
  lastAction: string;
}
export class Actions {
  name: string;
  isdisabled: boolean;
  classes: string;
}
