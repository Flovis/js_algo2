# Javascript Part II
1. [`arcadeRank`] Un joueur d'arcade veut grimper au sommet du classement et suivre son classement. Le jeu utilise un classement dense, donc son classement fonctionne comme ceci:
    - Le joueur avec le score le plus élevé est classé numéro 1 dans le classement.
    - Les joueurs qui ont des scores égaux reçoivent le même numéro de classement et le ou les joueurs suivants reçoivent le numéro de classement immédiatement suivant.

    Exemple: top_scores = [100,90,90,80], jeu = [70,80,105].
    Les joueurs classés auront respectivement la place 1, 2, 2 et 3 respectivement. Si les scores du joueur sont successivement de 70, 80 et 105, leur classement après chaque match est 4e, 3e et 1er. Renvoyez [4,3,1].

2. Etant donné une matrice carrée, calculez la différence absolue entre les sommes de ses diagonales. [`matriceCaree`]

3. Il y a une séquence de mots dans [`CamelCase`] comme une chaîne de lettres, `s`, ayant les propriétés suivantes:

    - Il s'agit d'une concaténation d'un ou plusieurs mots composés de lettres romaines.
    - Toutes les lettres du premier mot sont en minuscules.
    - Pour chacun des mots suivants, la première lettre est en majuscule et le reste des lettres est en minuscules.

    Étant donné `s`, déterminez le nombre de mots dans `s`.

    Exemple
    `s = "unDeuxTrois"`
    Il y a des mots dans la chaîne: «un», «deux», «trois».

4. [`valMinMax`] Compte tenu de cinq entiers positifs, trouvez les valeurs minimales et maximales qui peuvent être calculées en additionnant exactement quatre des cinq entiers. Imprimez ensuite les valeurs minimales et maximales respectives en une seule ligne de deux entiers longs séparés par un espace.
