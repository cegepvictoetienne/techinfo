# Guide de code

Objectif : énumérer des standards de code commun à tous les cours utilisant les langages de programmation. Le présent guide sert de «&nbsp;guide méthodologique&nbsp;» au sens de l’article 4.2.2 en raison de l’absence de méthodologie pour Bernard Dionne à propos des standards de code. 

Principes directeurs :
- Augmenter la lisibilité du code : en rendant plus lisible il est à la fois plus simple pour l’élève de comprendre ses erreurs et pour le personnel enseignant de comprendre ce que l’élève a voulu faire;
- Standardiser les attentes : pour des codes du même langage écrit dans des cours différents, les attentes de présentation devraient être les mêmes;
- Appliquer les bonnes pratiques des langages : utiliser les standards partagés par les concepteurs des langages afin de préparer aux attentes du marché du travail.

En raison des spécificités de chaque langage, la mise en œuvre des diverses attentes peut légèrement différer, mais les critères restent les mêmes. Le langage C#, en raison de son utilisation dès le début du programme, est utilisé pour illustrer la plupart des concepts de ce guide.

## Noms significatifs

Les noms des variables, méthodes, fonctions, classes, modules, espaces de noms, paquets et tout autre indicateur de code doivent représenter son rôle dans le code. 

```c# linenums="1"
// MAUVAISE PRATIQUE
public double ConvertirTemperature(double t) {
    return t * 1.8 + 32.0;
}

// BONNE PRATIQUE
public double ConvertirEnCelsius(double farenheit) {
    return farenheit * 1.8 + 32.0;
}
```

> Exception :
> - les variables pour itérer dans une boucle `for` nommées i, j et k sont permises
> - les lettres utilisées pour décrire une formule mathématique, comme Pythagore, sont permises, tant que la documentation permet d’identifier clairement le rôle de la lettre dans la formule
> - certains langages admettent des usages communs de raccourcis tels «&nbsp;e&nbsp;» pour «&nbsp;evenement&nbsp;». Ces conventions peuvent être utilisées si le contexte est clair ET l'enseignant ou l'enseignante les utilisent.

Les abréviations peuvent être utilisées si elles sont standards et que le code reste lisible malgré leur utilisation. 

En raison des outils modernes de développement (EDI), aucune notation hongroise ne doit être utilisée.

```c# linenums="1"
// MAUVAISE PRATIQUE
// Temp n'est pas standard
// CEnF n'est pas clair en raison de majuscules collées
public double ConvertirTempCEnF(double farenheit) {
    return t * 1.8 + 32.0;
}

// BONNE PRATIQUE
// Lbs et Kg sont des abbréviations connues
// Il n'y a pas deux majuscules consécutives
public double ConvertirMasseLbsEnKg(double livres) {
    return livres * 0.453592;
}
```

> Qu’est-ce qu’une abréviation standard? Vérifiez cette information avec l’enseignant ou l’enseignante du cours.

## Indentation

Les instructions de code doivent être indentées à chaque déclaration de bloc de code. Les déclarations prennent, dans la plupart des langages, la forme de l’ajout d’une paire d’accolades ou de l’utilisation du symbole deux points. Le standard d’indentation est de 4 espaces ou une tabulation équivalente à 4 espaces. Les indentations à 2 ou à 8 espaces ne doivent pas être utilisées, sauf si le standard du langage (comme SwitfUI) recommande l'utilisation d'une autre largeur d'indentation.

```c# linenums="1"
// MAUVAISE PRATIQUE
public int TrouverMaximum(int[] nombres) {
if(nombres.Length==0) {
throw new Exception("Le tableau pour la recherche est vide");
}
int max = nombres[0]
for(int i = 1; i < nombres.Length; i++) {
if(nombres[i]>max){
max=nombres[i];
}
}
return max;
}

// BONNE PRATIQUE
public int TrouverMaximum(int[] nombres) {
    if(nombres.Length==0) {
        throw new Exception("Le tableau pour la recherche est vide");
    }
    
    int max = nombres[0]
    
    for(int i = 1; i < nombres.Length; i++) {
        if(nombres[i]>max){
            max=nombres[i];
        }
    }

    return max;
}
```
> Important : les langages standardisent peu ou pas la présence de retour à la ligne ou d’espaces dans le code. Il est de recommander d’en mettre un peu plus qu’un peu moins afin d’augmenter la lisibilité du code. 

## Longueur des lignes de code

Les lignes de code devraient être d’une longueur maximale d’environ 80 caractères. Les lignes de code trop longues doivent être coupées manuellement, à un endroit adéquat, et la continuité du code doit être identité. Il est aussi possible de reformuler une ligne de code trop longue en introduisant des variables locales. 

```c# linenums="1"
// MAUVAISE PRATIQUE
public string FormaterInformationsUtilisateur(string prenom, string nomDeFamille, int age, string ville, string pays)
{
    return $"Nom: {prenom} {nomDeFamille}, Âge: {age}, Ville: {ville}, Pays: {pays}, Identifiant: {Guid.NewGuid().ToString().ToUpper()}";
}

// BONNE PRATIQUE
public string FormaterInformationsUtilisateur(string prenom, 
    string nomDeFamille, int age, string ville, string pays)
{
    return $"Nom: {prenom} {nomDeFamille}, Âge: {age}, " + 
        "Ville: {ville}, Pays: {pays}, " + 
        "Identifiant: {Guid.NewGuid().ToString().ToUpper()}";
}
```

## Cascade d’imbrications

Le nombre d’imbrications d’instruction de code ne devrait pas excéder 3 niveaux à l’intérieur d’une fonction ou méthode. Au-delà de ce niveau, vous devriez faire une fonction ou méthode supplémentaire. Il peut y avoir des cas rares ou il est nécessaire d'excéder 3 niveaux d'imbrication, vous devriez valider avec votre enseignant ou enseignante si c'est le cas pour votre algorithme.

```c# linenums="1"
// MAUVAISE PRATIQUE
/// <summary>
/// Vérifie dans une liste de noms d'utilisateur les caractères invalides. Les caractères
/// sont valides seulement s'ils sont des lettres ou des nombres. Les caractères trouvés sont
/// écrits dans la console.
/// </summary>
/// <param name="listeUtilisateurs">La liste des noms d'utilisateurs</param>
public void ValiderNomsUtilisateurs(string[] listeUtilisateurs)
{
    foreach (string nomUtilisateur in listeUtilisateurs) 
    {
        if (!string.IsNullOrEmpty(nomUtilisateur)) 
        {
            for (int i = 0; i < nomUtilisateur.Length; i++) 
            {
                if (!char.IsLetter(nomUtilisateur[i]) && !char.IsNumber(nomUtilisateur[i])) 
                {
                    Console.WriteLine($"Caractère invalide trouvé: {nomUtilisateur[i]}");
                }
            }
        }
    }
}

// BONNE PRATIQUE
// Valide la liste des noms d'utilisateur
public void ValiderNomsUtilisateurs(string[] listeUtilisateurs)
{
    foreach (string nomUtilisateur in listeUtilisateurs) 
    {
        ValiderNom(nomUtilisateur);
    }
}

// Valide un nom d'utilisateur
private void ValiderNom(string nomUtilisateur)
{
    if (!string.IsNullOrEmpty(nomUtilisateur)) 
    {
        for (int i = 0; i < nomUtilisateur.Length; i++) 
        {
            ValiderCaractere(nomUtilisateur[i])
        }
    }
}

// Valide un caractère selon les règles du système.
private void ValiderCaractere(char caractere)
{
    if (!char.IsLetter(caractere) && !char.IsNumber(caractere)) 
    {
        Console.WriteLine($"Caractère invalide trouvé: {caractere}");
    }
}

```

> Vous avez de la difficulté à réduire les niveaux d'imbrication dans vos codes : utilisez les clauses de garde pour vous aider. Ces clauses interrompre un traitement lorsqu'une condition n'est pas respectée plutôt que de permettre le traitement lorsqu'elle est respectées.  

``` c# title="Utilisation des clauses de garde"    
// SANS CLAUSE DE GARDE - 3 niveaux d'imbrication
public int TrouverMaximum(int[] nombres) {
    
    // Si le tableau contient au moins un élément un recherche le maximum
    if(nombres.Length >= 1) {
        int max = nombres[0]

        for(int i = 1; i < nombres.Length; i++) {
            if(nombres[i]>max) {
                max=nombres[i];
            }
        }
    
        return max;
    }
    else     // On lance une erreur, car le tableau est vide
    {
        throw new Exception("Le tableau pour la recherche est vide");
    }
}

// AVEC CLAUSE DE GARDE - 2 niveau d'imbrication
public int TrouverMaximum(int[] nombres) {
    
    // Si le tableau est vide, on lance une exception
    if(nombres.Length == 0) 
    {
        throw new Exception("Le tableau pour la recherche est vide");
    }

    // Si l'on atteint ce point, on est certain que le tableau contient au 
    // moins un élément
    int max = nombres[0]

    for(int i = 1; i < nombres.Length; i++) 
    {
        if(nombres[i] > max) 
        {
            max=nombres[i];
        }
    }
    
    return max;

}
```


## Commentaires

Chaque classe, fonction et méthode doivent être accompagnées d’un commentaire de code expliquant sa fonction, ses paramètres et son type de retour. Les séquences de code complexes, comme les codes imbriqués et les longues lignes scindées sur plusieurs, doivent aussi être accompagnées d’un commentaire. 

Lorsqu’un standard de documentation existe, il doit être utilisé. Sinon, l’enseignant ou l’enseignante indiquera le standard de documentation à utiliser.


|Langage|Standard|
|:--|:--|
|C#|&lt;summary&gt;|
|Java|Javadoc|
|JavaScript|JSDoc|
|PHP|PhpDoc|
|Python|Docstring|


## Accentuation

Bien que la plupart des outils prennent en charge les caractères accentués, il n’est pas recommandé de les utiliser dans les indicateurs de code. Cette recommandation vient du fait que votre code est partagé à travers divers environnements, parfois sur des systèmes d’exploitation différents. Les caractères accentués doivent être utilisés dans les commentaires qui accompagnent le code.

## Références

|Langage|Référence|
|:--|:--|
|C#|MSDN. *Common C# code conventions*. https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/identifier-names <br> MSDN. *C# identifier naming rules and conventions*. https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions|
|C++| Stroustrup B. et Sutter H. (8 juillet 2025). *C++ Core Guidelines*. https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines |
|CSS| Mozilla Developper Network (2025). _Référence CSS_. MDN Web Docs. https://developer.mozilla.org/fr/docs/Web/CSS/Reference |
|HTML| WHATWG (2025). *HTML Living Standard*. https://html.spec.whatwg.org/multipage <br> Mozilla Developper Network (2025). _Référence HTML_. MDN Web Docs. https://developer.mozilla.org/fr/docs/Web/HTML/Reference |
|Java| Gries, D. (2017). *Java Code Style Guidelines*. Cornell University. Departement of Computer Science. https://www.cs.cornell.edu/courses/JavaAndDS/JavaStyle.html|
|JavaScript| _Coding style_. The Modern JavaScript Tutorial. (2022, June 26). https://javascript.info/coding-style <br> Google javascript style guide. https://google.github.io/styleguide/jsguide.html |
|Kotlin| Android Developer. *Guide de style Kotlin.*  https://developer.android.com/kotlin/style-guide?hl=fr. |
|PHP| PHP Framework Interop Group. *PHP Standards Recommendations.* https://www.php-fig.org/psr/. |
|Python| van Rossum G., Warsaw B. et Coghlan A. (4 avril 2025). *PEP 8 – Style Guide for Python Code*. http://peps.python.org/pep-0008/ <br> Goodger D. et van Rossum, G. (17 avril 2024). *PEP 257 – Docstring Conventions*. https://peps.python.org/pep-0257/|
|SQL| Reppel, I. (2025). *Style Guide*. https://oracle.readthedocs.io/en/latest/sql/basics/style-guide.html|
|TypeScript| |

## Mises à jour

En cas de lien brisés ou pour signaler un changement dans les conventions, veuillez contacter ouellet.alexandre@cegepvicto.ca
