declare interface Kube$DeploymentList {
  apiVersion: string;
  kind: string;
  items: Kube$Deployment[];
  metadata: Kube$ListMeta;
}

declare interface Kube$Deployment {
  apiVersion?: string;
  kind?: string;
  metadata: Kube$ObjectMeta;
  spec: Kube$DeploymentSpec;
  status: Kube$DeploymentStatus;
}

declare interface Kube$DeploymentSpec {
  minReadySeconds?: number;
  paused?: boolean;
  progressDeadlineSeconds?: number;
  replicas: number;
  revisionHistoryLimit?: number;
  selector?: Kube$LabelSelector;
  strategy?: Kube$DeploymentStrategy;
  template: Kube$PodTemplateSpec;
}

declare interface Kube$DeploymentStatus {
  availableReplicas?: number;
  collisionCount?: number;
  conditions: Kube$DeploymentCondition[];
  observedGeneration: number;
  readyReplicas?: number;
  replicas: number;
  unavailableReplicas?: number;
  updatedReplicas?: number;
}

declare interface Kube$DeploymentCondition {
  lastTransitionTime: Kube$Time;
  lastUpdateTime: Kube$Time;
  message: string;
  reason: string;
  status: 'True' | 'False' | 'Unknown',
  type: string;
}

declare interface Kube$DeploymentStrategy {
  rollingUpdate?: Kube$RollingUpdateDeployment;
  type: 'Recreate' | 'RollingUpdate'
}

declare interface Kube$RollingUpdateDeployment {
  maxSurge: number;
  maxUnavailable: number;
}
