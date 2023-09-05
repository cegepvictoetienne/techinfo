# Convertir un disque vmdk vers qcow2  

__Vmdk__ est le format de disque compatible VMWare et VirtualBox. Pour l'utiliser dans UTM, il faut transformer un fichier __vmdk__ en __qcow2__.  

QEmu sera l'outil à utiliser pour convertir les fichiers.  

## Installation de Homebrew  

Pour installer QEmu, nous devons installer [Homebrew.](homebrew.md)  

## Installation de QEmu  
  
Installer QEmu avec Homebrew, faire la commande suivante dans le terminal :  

```
brew install qemu  
```  

## Conversion d'un fichier vmdk en qcow2  

Utiliser la commande suivante dans le terminal :  
  
``` 
qemu-img convert -O qcow2 -c fichier.vmdk fichier.qcow2  
``` 

