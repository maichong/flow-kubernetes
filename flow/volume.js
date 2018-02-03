declare interface Kube$Volume {
  awsElasticBlockStore?: Kube$AWSElasticBlockStoreVolumeSource;
  azureDisk?: Kube$AzureDiskVolumeSource;
  azureFile?: Kube$AzureFileVolumeSource;
  cephfs?: Kube$CephFSVolumeSource;
  cinder?: Kube$CinderVolumeSource;
  configMap?: Kube$ConfigMapVolumeSource;
  downwardAPI?: Kube$DownwardAPIVolumeSource;
  emptyDir?: Kube$EmptyDirVolumeSource;
  fc?: Kube$FCVolumeSource;
  flexVolume?: Kube$FlexVolumeSource;
  flocker?: Kube$FlockerVolumeSource;
  gcePersistentDisk?: Kube$GCEPersistentDiskVolumeSource;
  gitRepo?: Kube$GitRepoVolumeSource;
  glusterfs?: Kube$GlusterfsVolumeSource;
  hostPath?: Kube$HostPathVolumeSource;
  iscsi?: Kube$ISCSIVolumeSource;
  name: string;
  nfs?: Kube$NFSVolumeSource;
  persistentVolumeClaim?: Kube$PersistentVolumeClaimVolumeSource;
  photonPersistentDisk?: Kube$PhotonPersistentDiskVolumeSource;
  portworxVolume?: Kube$PortworxVolumeSource;
  projected?: Kube$ProjectedVolumeSource;
  quobyte?: Kube$QuobyteVolumeSource;
  rbd?: Kube$RBDVolumeSource;
  scaleIO?: Kube$ScaleIOVolumeSource;
  secret?: Kube$SecretVolumeSource;
  storageos?: Kube$StorageOSVolumeSource;
  vsphereVolume?: Kube$VsphereVirtualDiskVolumeSource;
}

declare interface Kube$EmptyDirVolumeSource {
  medium?: '' | 'Memory';
  sizeLimit?: Kube$Quantity;
}

declare interface Kube$HostPathVolumeSource {
  path: string;
  type: '' | 'DirectoryOrCreate' | 'Directory' | 'FileOrCreate' | 'File' | 'Socket' | 'CharDevice' | 'BlockDevice';
}
