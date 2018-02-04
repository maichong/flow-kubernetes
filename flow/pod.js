declare interface Kube$PodList {
  apiVersion: string;
  items: Kube$Pod[];
  kind: 'PodList';
  metadata: Kube$ListMeta;
}

declare interface Kube$Pod {
  apiVersion?: string;
  kind?: 'Pod';
  metadata: Kube$ObjectMeta;
  spec: Kube$PodSpec;
  status: Kube$PodStatus;
}

declare interface Kube$PodSpec {
  activeDeadlineSeconds?: number;
  affinity?: Kube$Affinity;
  automountServiceAccountToken?: boolean;
  containers: Kube$Container[];
  dnsConfig?: Kube$PodDNSConfig;
  dnsPolicy?: 'ClusterFirst' | 'ClusterFirstWithHostNet' | 'ClusterFirst' | 'Default' | 'None';
  hostAliases?: Kube$HostAlias[];
  hostIPC?: boolean;
  hostNetwork?: boolean;
  hostPID?: boolean;
  hostname?: string;
  imagePullSecrets?: Kube$LocalObjectReference[];
  initContainers?: Kube$Container[];
  nodeName?: string;
  nodeSelector?: Object;
  priority?: number;
  priorityClassName?: string;
  restartPolicy?: 'Always' | 'OnFailure' | 'Never';
  schedulerName?: string;
  securityContext?: Kube$PodSecurityContext;
  serviceAccount?: string;
  serviceAccountName?: string;
  subdomain?: string;
  terminationGracePeriodSeconds?: number;
  tolerations?: Kube$Toleration[];
  volumes?: Kube$Volume[];
}

declare interface Kube$PodStatus {
  conditions: Kube$PodCondition[];
  containerStatuses: Kube$ContainerStatus[];
  hostIP: string;
  initContainerStatuses?: Kube$ContainerStatus[];
  message?: string;
  phase?: string;
  podIP: string;
  qosClass: string;
  reason?: string;
  startTime: Kube$Time
}

declare interface Kube$PodCondition {
  lastProbeTime: null | Kube$Time;
  lastTransitionTime?: Kube$Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}

declare interface Kube$PodSecurityContext {
  fsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: boolean;
  seLinuxOptions?: Kube$SELinuxOptions;
  supplementalGroups?: number[];
}

declare interface Kube$PodTemplateSpec {
  metadata: Kube$ObjectMeta;
  spec: Kube$PodSpec
}
