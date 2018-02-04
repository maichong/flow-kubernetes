declare interface Kube$Error {
  kind: 'Status';
  apiVersion: string;
  metadata: Object;
  status: 'Failure';
  message: string;
  reason: string;
  details: Object;
  code: number;
}
