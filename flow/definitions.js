declare interface Kube$Affinity {
  nodeAffinity?: Kube$NodeAffinity;
  podAffinity?: Kube$PodAffinity;
  podAntiAffinity?: Kube$PodAntiAffinity;
}

declare interface Kube$AttachedVolume {
  devicePath: string;
  name: string;
}

declare interface Kube$Capabilities {
  add: string[];
  drop: string[];
}

declare interface Kube$ConfigMapEnvSource {
  name: string;
  optional?: boolean;
}

declare interface Kube$ConfigMapKeySelector {
  key: string;
  name: string;
  optional?: boolean;
}

declare interface Kube$ContainerImage {
  names: string[];
  sizeBytes: number;
}

declare interface Kube$ContainerPort {
  containerPort: number;
  hostIP?: string;
  hostPort?: number;
  name?: string;
  protocol?: 'TCP' | 'UDP'
}

declare interface Kube$DaemonEndpoint {
  port: number;
}

declare interface Kube$EnvFromSource {
  configMapRef: Kube$ConfigMapEnvSource;
  prefix?: string;
  secretRef: Kube$SecretEnvSource;
}

declare interface Kube$EnvVar {
  name: string;
  value: string;
  valueFrom: Kube$EnvVarSource;
}

declare interface Kube$EnvVarSource {
  configMapKeyRef?: Kube$ConfigMapKeySelector;
  fieldRef?: Kube$ObjectFieldSelector;
  resourceFieldRef?: Kube$ResourceFieldSelector;
  secretKeyRef?: Kube$SecretKeySelector;
}

declare interface Kube$ExecAction {
  command: string[]
}

declare interface Kube$Handler {
  exec?: Kube$ExecAction;
  httpGet?: Kube$HTTPGetAction;
  tcpSocket?: Kube$TCPSocketAction;
}

declare interface Kube$HTTPGetAction {
  host: string;
  httpHeaders: Kube$HTTPHeader[];
  path: string;
  port?: number;
  scheme?: string;
}

declare interface Kube$HTTPHeader {
  name: string;
  value: string;
}

declare interface Kube$Initializer {
  name: string;
}

declare interface Kube$Initializers {
  pending?: Kube$Initializer[];
  result?: Kube$Status;
}

declare interface Kube$LabelSelector {
  matchExpressions?: Kube$LabelSelectorRequirement;
  matchLabels?: Object;
}

declare interface Kube$LabelSelectorRequirement {
  key: string;
  operator: 'In' | 'NotIn' | 'Exists' | 'DoesNotExist';
  values: string[];
}

declare interface Kube$Lifecycle {
  postStart: Kube$Handler;
  preStop: Kube$Handler;
}

declare interface Kube$ListMeta {
  continue?: string;
  resourceVersion: string;
  selfLink: string;
}

declare interface Kube$ObjectFieldSelector {
  apiVersion?: string;
  fieldPath: string;
}

declare interface Kube$ObjectMeta {
  annotations?: Object;
  clusterName?: string;
  creationTimestamp?: Kube$Time;
  deletionGracePeriodSeconds?: number;
  deletionTimestamp?: Kube$Time;
  finalizers?: string[];
  generateName?: string;
  generation?: number;
  initializers?: Kube$Initializers;
  labels?: Object;
  name?: string;
  namespace?: string;
  ownerReferences?: Kube$OwnerReference[];
  resourceVersion?: string;
  selfLink?: string;
  uid?: string;
}

declare interface Kube$ObjectReference {
  apiVersion?: string;
  fieldPath?: string;
  kind: string;
  name: string;
  namespace: string;
  resourceVersion: string;
  uid: string;
}

declare interface Kube$OwnerReference {
  apiVersion?: string;
  blockOwnerDeletion?: boolean;
  controller?: boolean;
  kind?: string;
  name?: string;
  uid: string;
}

declare interface Kube$Probe {
  exec?: Kube$ExecAction;
  failureThreshold?: number;
  httpGet?: Kube$HTTPGetAction;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: Kube$TCPSocketAction;
  timeoutSeconds?: number;
}

declare interface Kube$Quantity {
}

declare interface Kube$ResourceFieldSelector {
  containerName?: string;
  divisor?: Kube$Quantity;
  resource: string;
}

declare interface Kube$ResourceRequirements {
  limits?: {
    cpu?: string,
    memory?: string
  };
  requests?: {
    cpu?: string,
    memory?: string
  };
}

declare interface Kube$SELinuxOptions {
  level?: string;
  role?: string;
  type?: string;
  user?: string;
}

declare interface Kube$SecurityContext {
  allowPrivilegeEscalation?: boolean;
  capabilities?: Kube$Capabilities;
  privileged?: boolean;
  readOnlyRootFilesystem?: boolean;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: Kube$SELinuxOptions;
}

declare interface Kube$SecretEnvSource {
  name: string;
  optional?: boolean;
}

declare interface Kube$SecretKeySelector {
  key: string;
  name: string;
  optional?: boolean;
}

declare interface Kube$Status {
  apiVersion?: string;
  code: number;
  details?: Kube$StatusDetails;
  kind?: string;
  message: string;
  metadata?: Kube$ListMeta;
  reason?: string;
  status: 'Success' | 'Failure';
}

declare interface Kube$StatusCause {
  field: string;
  message: string;
  reason: string;
}

declare interface Kube$StatusDetails {
  causes?: Kube$StatusCause[];
  group?: string;
  kind?: string;
  name: string;
  retryAfterSeconds?: number;
  uid: string;
}

declare interface Kube$TCPSocketAction {
  host: string;
  port: number;
}

declare type Kube$Time = string;

declare interface Kube$VolumeDevice {
  devicePath: string;
  name: string;
}

declare interface Kube$VolumeMount {
  mountPath: string;
  mountPropagation?: string;
  name: string;
  readOnly?: boolean;
  subPath?: string;
}
