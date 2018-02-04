declare interface Kube$EndpointsList {
  apiVersion: string;
  kind: 'EndpointsList';
  items: Kube$Endpoints[];
  metadata: Kube$ListMeta;
}

declare interface Kube$Endpoints {
  apiVersion?: string;
  kind?: 'Endpoints';
  metadata: Kube$ObjectMeta;
  subsets: Kube$EndpointSubset
}

declare interface Kube$EndpointSubset {
  addresses?: Kube$EndpointAddress[];
  notReadyAddresses?: Kube$EndpointAddress[];
  ports?: Kube$EndpointPort[];
}

declare interface Kube$EndpointAddress {
  hostname?: string;
  ip: string;
  nodeName: string;
  targetRef: Kube$ObjectReference
}

declare interface Kube$EndpointPort {
  name: string;
  port: number;
  protocol?: 'TCP' | 'UDP';
}
