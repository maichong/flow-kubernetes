declare interface Kube$SecretList {
  apiVersion: string;
  kind: 'SecretList';
  items: Kube$Secret[];
  metadata: Kube$ListMeta;
}

declare interface Kube$Secret {
  apiVersion?: string;
  kind?: 'Secret';
  metadata: Kube$ObjectMeta;
  stringData: Object;
  type: string;
}
