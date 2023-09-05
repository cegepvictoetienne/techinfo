# Convertir un disque qcow2 vers vmdk   

__Vmdk__ est le format de disque compatible VMWare et VirtualBox. Pour envoyer votre VM au professeur , il faut transformer un fichier __qcow2__ en __vmdk__.

QEmu sera l'outil à utiliser pour convertir les fichiers.  

## Installation de Homebrew  

Pour installer QEmu, nous devons installer [Homebrew.](homebrew.md)  

## Installation de QEmu  
  
Installer QEmu avec Homebrew, faire la commande suivante dans le terminal :  

```
brew install qemu  
```  

## Conversion d'un fichier qcow2 en vmdk   

Utiliser la commande suivante dans le terminal :  
  
``` 
qemu-img convert -O vmdk -c fichier.qcow2 fichier.vmdk  
``` 

