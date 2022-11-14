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
- kubectl delete replicasets - Delete a replicaset
- kubectl get deployments - List deployments
- kubectl rollout history deployment deploymentName - List rollouts history of a deployment
- kubectl rollout undo deployment - make the rollback to last revision
- kubectl get services - List services
- kubectl proxy --port=portNumber - Proxy to access k8s api
- kubectl top pod podName
- kubectl get hpa - List hpas
- kubectl get ns - List namespaces
- kubectl create ns namespaceName - Create a namespace
- kubectl config current-context - See the current context
- kubectl config set-context contextName --namespace=namespaceName --cluster=clusterName --user=userName

## Good to Know
~/.kube/config - has all the credentials and certificates to access a cluster