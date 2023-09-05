# Créer un ISO pour transférer des fichiers dans Windows XP sur UTM  

UTM offre la possibilité de charger des ISO dans le lecteur DVD virtuel de Windows XP. Lorsque vous avez des fichiers à transférer, créer un ISO sur MacOs reste la manière la plus facile de faire.  

## 1 - Créer un CDR avec l'utilitaire de disque  

Mettre les fichiers de votre futur ISO dans un dossier.  

!!! figure "Dossier"
    ![utm-001](../assets/iso-001.png)  

Dans l'utilitaire de disque, aller dans le menu __Fichier__ -> __Nouvelle image__ -> __Image d'un dossier...__.  

!!! figure "Image d'un dossier"
    ![utm-002](../assets/iso-002.png)  

Sélectionner le dossier.  

!!! figure "Sélectionner le dossier"
    ![utm-003](../assets/iso-003.png)  

Sélectionner le format d'image __Maître DVD/CD__.  Cliquer sur __Enregistrer__.  

!!! figure "Créer le CDR"
    ![utm-004](../assets/iso-004.png)  

## 2 - Créer un ISO avec le CDR    

Dans le terminal, entrer la commande suivante :  

``` 
hdiutil makehybrid -iso -joliet -o xp-tools.iso xp-tools.cdr  
```   

Le ISO est maintenant créé.  

## 3 - Charger le ISO dans UTM  

Dans UTM, cliquer sur l'icône d'un DVD en haut à droite, puis sélectionner __Change__ pour utiliser votre nouvel ISO.  

!!! figure "Changer le ISO de UTM"
    ![utm-005](../assets/iso-005.png)  

## 4 - Utiliser les fichiers dans Windows XP  

Les fichiers sont désormaits dans Windows XP :  

!!! figure "Fichers dans le lecteur DVD de Windows XP"
    ![utm-006](../assets/iso-006.png)  


# Références  
[Création ISO sur MacOs](https://www.petenetlive.com/KB/Article/0001554)  
