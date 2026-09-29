# Désactiver l'IA dans Visual Studio Code  


## Désactiver le chat IA  

Ouvrir la palette de commandes (Ctrl+Maj+P) et choisir « Ouvrir les paramètres utilisateurs (JSON) » (« Open User Settings (JSON) »).

Ajouter ceci dans le JSON de votre profile :  

``` json
{
  "chat.disableAIFeatures": true,
  "chat.agent.enabled": false,
  "chat.commandCenter.enabled": false
}
``` 

## Désactiver toutes les extensions IA installées.

Ouvrir la palette de commandes (Ctrl+Maj+P) et choisir « Afficher extensions ».

Désactiver toutes celles qui utilise l'IA.  




