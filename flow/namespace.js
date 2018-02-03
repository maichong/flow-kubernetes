declare interface Kube$NamespaceList {
  apiVersion: string;
  kind: string;
  items: Kube$Namespace[];
  metadata: Kube$ListMeta;
}

declare interface Kube$Namespace {
  apiVersion?: string;
  kind?: string;
  metadata: Kube$ObjectMeta;
  spec: Kube$NamespaceSpec;
  status: Kube$NamespaceStatus;
}

declare interface Kube$NamespaceSpec {
  finalizers: string[];
}

declare interface Kube$NamespaceStatus {
  phase: string;
}
