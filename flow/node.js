declare interface Kube$NodeList {
  apiVersion: string;
  kind: 'NodeList';
  items: Kube$Node[];
  metadata: Kube$ListMeta;
}

declare interface Kube$Node {
  apiVersion?: string;
  kind?: 'Node';
  metadata: Kube$ObjectMeta;
  spec: Kube$NodeSpec;
  status: Kube$NodeStatus;
}

declare interface Kube$NodeSpec {
  configSource?: Kube$NodeConfigSource;
  externalID: string;
  podCIDR?: string;
  providerID?: string;
  taints?: Kube$Taint[];
  unschedulable?: boolean;
}


declare interface Kube$NodeStatus {
  addresses: Kube$NodeAddress;
  allocatable: {
    cpu: string;
    memory: string;
    pods: string;
  };
  capacity: {
    cpu: string;
    memory: string;
    pods: string;
  };
  conditions: Kube$NodeCondition[];
  daemonEndpoints: Kube$NodeDaemonEndpoints;
  images: Kube$ContainerImage[];
  nodeInfo: Kube$NodeSystemInfo;
  phase?: string;
  volumesAttached?: Kube$AttachedVolume[];
  volumesInUse?: string[];
}

declare interface Kube$NodeConfigSource {
  apiVersion?: string;
  configMapRef?: Kube$ObjectReference;
  kind?: string;
}

declare interface Kube$NodeAddress {
  address: string;
  type: 'Hostname' | 'ExternalIP' | 'InternalIP';
}

declare interface Kube$NodeCondition {
  lastHeartbeatTime: Kube$Time;
  lastTransitionTime: Kube$Time;
  message: string;
  reason: string;
  status: 'True' | 'False' | 'Unknown';
  type: string;
}

declare interface Kube$NodeDaemonEndpoints {
  kubeletEndpoint: Kube$DaemonEndpoint;
}

declare interface Kube$NodeSystemInfo {
  architecture: string;
  bootID: string;
  containerRuntimeVersion: string;
  kernelVersion: string;
  kubeProxyVersion: string;
  kubeletVersion: string;
  machineID: string;
  operatingSystem: string;
  osImage: string;
  systemUUID: string;
}
