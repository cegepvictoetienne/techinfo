# Citer les intelligences artificielles

!!! note
    Adaptation Web du document préparé par Alexandre Ouellet, enseignant en Techniques de l’informatique au Cégep de Victoriaville, 2023.​  



Dans certains cours, l’usage des intelligences artificielles est autorisé dans les évaluations sommatives. Les intelligences artificielles qui doivent être citées sont celles dont la fonction dépasse la simple autocomplétion ou la génération à partir d’un modèle (comme IntelliSense).

Dans le format APA la citation de l’intelligence artificielle prend la forme suivante : 

    Auteur. (Année). Nom de l’intelligence artificielle (version date) [Type de modèle]. URL

Par exemple, pour citer le modèle du 15 mars 2023 de ChatGPT on utilise la référence suivante : 

    OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de langage]. https://chat.openai.com/chat

Dans le texte, l’appel de citation se fera avec (Auteur, Année) par exemple : (Open IA, 2023).

# Citation dans le code

Pour le code, on placera soit en commentaire d’en-tête si le code de l’ensemble de la méthode (ou de la classe) a été généré. Les exemples sont fait avec ChatGPT, mais on peut remplacer la citation par celle appropriée pour tout autre intelligence artificielle utilisée.

## Style C\#

Dans une balise __\<remarks>__ à l’intérieur de la balise __\<summary>__ (Billwagner, 2022).

### Si tout le code a été généré

```
/// <summary>
/// Classe <c>Point</c> représente une coordonnée.
///
{==/// <remarks>==}
{==/// Code généré par : OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif ==}
{==/// de langage]. https://chat.openai.com/chat==}
{==/// </remarks>==}
/// 
/// </summary>
public class Point
{
 
}


```

### Si une partie du code a été généré  

```
/// <summary>
/// Classe <c>Point</c> représente une coordonnée.
/// </summary>
public class Point
{
    /// <summary>
    /// Méthode <c>Draw</c> génère un point.
    {==/// <remarks>==}
    {==/// Code partiellement généré par : OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif ==}
    {==/// de langage]. https://chat.openai.com/chat==}
    {==/// </remarks>==}
    /// </summary>
    void Draw() {...}
}


```

## Style Kotlin

Dans le commentaire d’en-tête de la méthode ou de la classe.

### Si tout le code a été généré
```
/**
 * Un groupe de *membres*.
 *
 * Cette classe n'a pas d'utilité, ce n'est qu'un exemple de documentation
 *
 * @param T le type de membre de ce groupe.
 * @property name le nom de ce groupe.
 * @constructor Crée un groupe vide.
 *
 {==* Code généré par : OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de ==}
 {==* langage]. https://chat.openai.com/chat==}
 */
class Group<T>(val name: String) {
    /**
     * Ajoute un [membre] à ce groupe.
     * @return la nouvelle grandeur du groupe.
     */
    fun add(membre: T): Int { ... }
}
```

### Si une partie du code a été généré
```
/**
 * Un groupe de *membres*.
 *
 * Cette classe n'a pas d'utilité, ce n'est qu'un exemple de documentation
 *
 * @param T le type de membre de ce groupe.
 * @property name le nom de ce groupe.
 * @constructor Crée un groupe vide.
 *
 {==* Code partiellement généré par : OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de ==}
 {==* langage]. https://chat.openai.com/chat==}
 */
class Group<T>(val name: String) {
    /**
     * Ajoute un [membre] à ce groupe.
     * @return la nouvelle grandeur du groupe.
     */
    fun add(membre: T): Int { ... }
}
```

## Style Java  

Avec le tag author dans le commentaire de javadoc (Oracle, 2016).

### Si tout le code a été généré  

```
/**
* Renvoie un objet Image qui peut ensuite être affiché à l'écran.
* L'argument url doit spécifier un <a href="#{@link}">{@link URL}</a> absolu. 
* L'argument nom est un spécificateur qui est relatif à l'argument url.
* 
* Cette méthode retourne toujours immédiatement, que l'image
* existe ou non. Lorsque cette applet tente de dessiner l'image sur
* l'écran, les données seront chargées. Les primitives graphiques
* qui dessinent l'image peindront progressivement sur l'écran.
*
* @param  url  une URL absolue indiquant l'emplacement de base de l'image
* @param  nom l'emplacement de l'image, relatif à l'argument url
* @return      l'image à l'URL spécifiée
* @see         Image
{==* @author OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de ==}
{==*         langage]. https://chat.openai.com/chat==}
*/
public Image getImage(URL url, String name) {
    try {
        return getImage(new URL(url, name));
        } catch (MalformedURLException e) {
            return null;
    }
}
```

### Si une partie du code a été généré

```
/**
* Renvoie un objet Image qui peut ensuite être affiché à l'écran.
* L'argument url doit spécifier un <a href="#{@link}">{@link URL}</a> absolu. 
* L'argument nom est un spécificateur qui est relatif à l'argument url.
* 
* Cette méthode retourne toujours immédiatement, que l'image
* existe ou non. Lorsque cette applet tente de dessiner l'image sur
* l'écran, les données seront chargées. Les primitives graphiques
* qui dessinent l'image peindront progressivement sur l'écran.
*
* @param  url  une URL absolue indiquant l'emplacement de base de l'image
* @param  nom l'emplacement de l'image, relatif à l'argument url
* @return      l'image à l'URL spécifiée
* @see         Image
{==* @author Auteur 1==}
{==* @author OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de ==}
{==*         langage]. https://chat.openai.com/chat==}
*/
public Image getImage(URL url, String name) {
    try {
        return getImage(new URL(url, name));
        } catch (MalformedURLException e) {
            return null;
    }
}
```

## Style PHP

Avec le tag author dans le commentaire de PHPDoc.  

### Si tout le code a été généré 
```
/**
 * Trie un tableau en utilisant l'algorithme de tri à bulles.
 *
 * @param array $array Le tableau à trier.
 * @return array Le tableau trié.
 {==* @author OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de ==}
 {==*         langage]. https://chat.openai.com/chat==}
 */
function bubbleSort(array $array): array {
    $n = count($array);
    $swapped = true;
    while ($swapped) {
        $swapped = false;
        for ($i = 0; $i < $n - 1; $i++) {
            if ($array[$i] > $array[$i + 1]) {
                // Échangez les éléments $array[$i] et $array[$i + 1]
                $temp = $array[$i];
                $array[$i] = $array[$i + 1];
                $array[$i + 1] = $temp;
                $swapped = true;
            }
        }
    }
    return $array;
}
```

### Si une partie du code a été généré
```
/**
 * Trie un tableau en utilisant l'algorithme de tri à bulles.
 *
 * @param array $array Le tableau à trier.
 * @return array Le tableau trié.
 {==* @author Auteur 1==}
 {==* @author OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de ==}
 {==*         langage]. https://chat.openai.com/chat==}
 */
function bubbleSort(array $array): array {
    $n = count($array);
    $swapped = true;
    while ($swapped) {
        $swapped = false;
        for ($i = 0; $i < $n - 1; $i++) {
            if ($array[$i] > $array[$i + 1]) {
                // Échangez les éléments $array[$i] et $array[$i + 1]
                $temp = $array[$i];
                $array[$i] = $array[$i + 1];
                $array[$i + 1] = $temp;
                $swapped = true;
            }
        }
    }
    return $array;
}
```

## Style Python

On inclut simplement dans la docstring les informations pour l’utilisation d’une intelligence artificielle (Goodger et van Rossum, 2001).

### Si tout le code a été généré
```
"""
Description 

{==Code généré par : OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de ==}
{==langage]. https://chat.openai.com/chat==}

Keywords : …
"""
```

### Si une partie du code a été généré
```
"""
Description 

{==Code partiellement généré par : OpenAI. (2023). ChatGPT (version 15 mars 2023) ==}
{==[Modèle massif de langage]. https://chat.openai.com/chat==}

Keywords : …
"""
```

## Pour tous les langages  

### Une ou quelques lignes de code  

Si seulement quelques lignes de code sont généré, alors on introduit un commentaire court dans le code.

```
{==// Généré par OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de langage]. https://chat.openai.com/chat==}

Code

{==// Fin du code généré==}
```


# Modèles de citation

## ChatGPT (Modèle du 15 mars 2023)

    OpenAI. (2023). ChatGPT (version 15 mars 2023) [Modèle massif de langage]. https://chat.openai.com/chat

## GitHub Copilot (Modèle de février 2023)

    GitHub. (2023). GitHub Copilot (version février 2023) [Modèle de génération de code]. https://resources.github.com/copilot-for-business/ 

# Références

BillWagner, isaacmarvel, mducharm, Eagle3386, yecril71pl, & AdrianEdelen. (2022, August 18). Recommended XML documentation tags for a class and its members. Recommended XML documentation tags for a class and its members | Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/recommended-tags 

Goodger , D., & van Rossum, G. (2001, June 13). Python enhancement proposals. PEP 257 – Docstring Conventions. https://peps.python.org/pep-0257/ 

McAdoo, T. (7 avril 2023). How to cite chatgpt. American Psychological Association. https://apastyle.apa.org/blog/how-to-cite-chatgpt 

Oracle. (8 janvier 2016). javadoc. Java Documentation. https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html 



