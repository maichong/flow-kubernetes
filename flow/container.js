declare interface Kube$Container {
  args?: string[],
  command?: string[],
  env?: Kube$EnvVar[],
  envFrom?: Kube$EnvFromSource[],
  image: string,
  imagePullPolicy?: 'Always' | 'Never' | 'IfNotPresent',
  lifecycle?: Kube$Lifecycle,
  livenessProbe?: Kube$Probe,
  name: string,
  ports?: Kube$ContainerPort[],
  readinessProbe?: Kube$Probe,
  resources?: Kube$ResourceRequirements,
  securityContext?: Kube$SecurityContext,
  stdin?: boolean,
  stdinOnce?: boolean,
  terminationMessagePath?: string,
  terminationMessagePolicy?: string,
  tty?: boolean,
  volumeDevices?: Kube$VolumeDevice[],
  volumeMounts?: Kube$VolumeMount,
  workingDir?: string
}

declare interface Kube$ContainerState {
  running?: Kube$ContainerStateRunning;
  terminated?: Kube$ContainerStateTerminated;
  waiting?: Kube$ContainerStateWaiting;
}

declare interface Kube$ContainerStateRunning {
  startedAt: Kube$Time;
}

declare interface Kube$ContainerStateTerminated {
  containerID: string;
  exitCode: number;
  finishedAt: Kube$Time;
  message: string;
  reason: string;
  signal: number;
  startedAt: Kube$Time;
}

declare interface Kube$ContainerStateWaiting {
  message: string;
  reason: string;
}

declare interface Kube$ContainerStatus {
  containerID: string;
  image: string;
  imageID: string;
  lastState: Kube$ContainerState;
  name: string;
  ready: boolean;
  restartCount?: number;
  state: Kube$ContainerState;
}
