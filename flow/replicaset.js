declare interface Kube$ReplicaSetList {
  apiVersion: string;
  kind: 'ReplicaSetList';
  items: Kube$ReplicaSet[];
  metadata: Kube$ListMeta;
}

declare interface Kube$ReplicaSet {
  apiVersion?: string;
  kind?: 'ReplicaSet';
  metadata: Kube$ObjectMeta;
  spec: Kube$ReplicaSetSpec;
  status: Kube$ReplicaSetStatus;
}

declare interface Kube$ReplicaSetSpec {
  minReadySeconds: number;
  replicas: number;
  selector: Kube$LabelSelector;
  template: Kube$PodTemplateSpec;
}

declare interface Kube$ReplicaSetStatus {
  availableReplicas?: number;
  conditions?: Kube$ReplicaSetCondition[];
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}

declare interface Kube$ReplicaSetCondition {
  lastTransitionTime: Kube$Time;
  message: string;
  reason: string;
  status: 'True' | 'False' | 'Unknown';
  type: string;
}
