declare interface Kube$SecretList {
  apiVersion: string;
  kind: string;
  items: Kube$Secret[];
  metadata: Kube$ListMeta;
}

declare interface Kube$Secret {
  apiVersion?: string;
  kind?: string;
  metadata: Kube$ObjectMeta;
  stringData: Object;
  type: string;
}
