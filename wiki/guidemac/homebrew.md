# Installation de Homebrew  
  
    
## Installation de XCode Command Line Tools

Avant l'installation de Homebrew, il faut installer les outils de ligne de commande XCode. Pour l'installer, ouvrir le terminal et exécuter cette commande :  

```
xcode-select --install  
```

## Installation de Homebrew  

Homebrew est un gestionnaire de paquets (Package Manager) pour le Mac.  

Pour l'installer, ouvrir le terminal et exécuter cette commande :  

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Suivre les indications dans le terminal.  

## Ajouter Homebrew au PATH  

Faire les commandes suivantes pour ajouter Homebrew au PATH de zsh :  

```
cd /opt/homebrew/bin/  
  
PATH=$PATH:/opt/homebrew/bin  
  
cd  
  
touch .zshrc  
  
export PATH="/opt/homebrew/bin:${PATH}" >> .zshrc  
```