declare interface Kube$ServiceList {
  apiVersion: string;
  kind: string;
  items: Kube$Service[];
  metadata: Kube$ListMeta;
}

declare interface Kube$Service {
  apiVersion?: string;
  kind?: string;
  metadata: Kube$ObjectMeta;
  spec: Kube$ServiceSpec;
  status: Kube$ServiceStatus;
  code?: number;
}

declare interface Kube$ServiceSpec {
  clusterIP: string;
  externalIPs?: string[];
  externalName?: string;
  externalTrafficPolicy?: string;
  healthCheckNodePort?: number;
  loadBalancerIP?: string;
  loadBalancerSourceRanges?: string[];
  ports?: Kube$ServicePort[];
  publishNotReadyAddresses?: boolean;
  selector?: Object;
  sessionAffinity: 'ClientIP' | 'None';
  sessionAffinityConfig?: Kube$SessionAffinityConfig;
  type?: 'ClusterIP' | 'ExternalName' | 'NodePort' | 'LoadBalancer';
}

declare interface Kube$ServicePort {
  name: string;
  nodePort?: number;
  port: number;
  protocol?: 'TCP' | 'UDP';
  targetPort: number;
}

declare interface Kube$ServiceStatus {
  loadBalancer?: Kube$LoadBalancerStatus
}
