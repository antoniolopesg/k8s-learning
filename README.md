# k8s-learning
## Kind

- kind create cluster - Create a cluster
  - options:
     - kind create cluster --config=dir/to/kind.yaml --name=clusterName
- kind get clusters - Liste kind clusters
- kind delete clusters kind - Delete kind cluster

## Kubectl

- kubectl cluster-info --context clusterName - Change cluster context
- kubectl get nodes - List nodes of
- kubectl config get-clusters - Liste clusters
- kubectl config use-context contextName - Change cluster context
- kubectl apply -f dir/to/config.yaml - Apply configuration files
- kubectl get pods - List pods
- kubectl port-forward pod/podName 8000:80 - Redirections to access container inside a pod
- kubectl delete pod podName - Delete pod
- kubectl get replicasets - List replicasets
- kubectl describe pod podName - Describe a pod

## Good to Know
~/.kube/config - has all the credentials and certificates to access a cluster