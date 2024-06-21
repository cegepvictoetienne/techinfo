#-------------------------------------------
# Générateur d'horaire par professeur
#-------------------------------------------
# Ce script génère un fichier markdown à partir d'un fichier Excel contenant les horaires des professeurs.
# Voir le fichier horaire.xlsx.
#-------------------------------------------
# Auteur: Etienne Rivard
#-------------------------------------------

from openpyxl import load_workbook

PAR_JOUR = 9
TITRE_PAGE = "# Horaire des professeurs pour l'automne 2024"
REUNION_DEPARTEMENT = {
    "titre":"Réunion&nbsp;départementale",
    "heure_debut":"8:15",
    "span": 2,
    "jour": "Mercredi",
    "local": "C208",
    "prof": "Departement",
    "initiales": "DI"
}

def generer_horaire_de_excel(chemin_fichier_excel, chemin_fichier_sortie):

    # Lire le contenu du chiffrier Excel et le mettre dans une structure de données
    wb = load_workbook(chemin_fichier_excel)
    ws = wb.active
    
    profs = {}
    for row in ws.iter_rows(min_row=2, values_only=True):
        jour, heure_debut, span, prof, titre, local, initiales = row
        if prof not in profs:
            profs[prof] = { "nom": prof, "initiales": initiales, "cours": {} }
        if jour not in profs[prof]["cours"]:
            profs[prof]["cours"][jour] = []
        profs[prof]["cours"][jour].append({
            "heure_debut": heure_debut,
            "span": span,
            "prof": prof,
            "titre": titre,
            "local": local,
            "initiales": initiales,
        })

    # Début de la génération du contenu Markdown
    contenu_page = f'''
{ TITRE_PAGE }

<div id="calendar">
<div class="time-slot-row heading">
    <div class="day-slot empty"></div>
    <div class="day-slot" style="grid-column: 2 / span 9">Lundi</div>
    <div class="day-slot" style="grid-column: 11 / span 9">Mardi</div>
    <div class="day-slot" style="grid-column: 20 / span 9">Mercredi</div>
    <div class="day-slot" style="grid-column: 29 / span 9">Jeudi</div>
    <div class="day-slot" style="grid-column: 38 / span 9">Vendredi</div>
</div>
<div class="time-slot-row heading">
<div class="day-slot">Prof</div>
    '''

    jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
    # Ajout des heures à chaque jour
    heures = [heure for heure in range(8, 17)]
    for jour in jours:
        for heure in heures:
            contenu_page += f'<div class="day-slot">{heure}</div>'
    contenu_page += '</div>'

    reunion_departement_ajoutee = False

    profs_tries = sorted(profs)
    for prof in profs_tries:
        contenu_page += f'<div class="time-slot-row"><div class="day-slot" style="grid-column: 1">{profs[prof]["nom"]}</div>'
        for jour in jours:
            for heure in heures:
                # Ajouter la réunion départementale
                if not reunion_departement_ajoutee and jour == REUNION_DEPARTEMENT["jour"] and heure == 8:
                    colonne = jours.index(jour) * PAR_JOUR + heures.index(heure) + 2
                    contenu_page += f'<div class="appointment {REUNION_DEPARTEMENT["prof"]}" style="grid-column: {colonne} / span {REUNION_DEPARTEMENT["span"]}; grid-row: span 11">'
                    contenu_page += f'<div class="title">{REUNION_DEPARTEMENT["titre"]}</div>'
                    contenu_page += f'<div class="appointment-details">{REUNION_DEPARTEMENT["titre"]}<br/>{REUNION_DEPARTEMENT["local"]}<br/>{REUNION_DEPARTEMENT["prof"]}</div>'
                    contenu_page += '</div>'
                    reunion_departement_ajoutee = True
                # Faire le traitement seulement si le prof a des cours pour ce jour
                if jour in profs[prof]["cours"]:
                    for cours in profs[prof]["cours"][jour]:
                        if cours["heure_debut"] == f'{heure}:15':
                            colonne = jours.index(jour) * PAR_JOUR + heures.index(heure) + 2
                            contenu_page += f'<div class="appointment {cours["prof"]}" style="grid-column: {colonne} / span {cours["span"]}">'
                            contenu_page += f'<div class="title">{cours["initiales"]}</div>'
                            contenu_page += f'<div class="appointment-details">{cours["titre"]}<br/>{cours["local"]}<br/>{cours["prof"]}</div>'
                            contenu_page += '</div>'
        contenu_page += '</div>'
    
    contenu_page += '''
    </div>
    '''

    with open(chemin_fichier_sortie, 'w') as f:
        f.write(contenu_page)

generer_horaire_de_excel('./template/horaire.xlsx', './wiki/horaire.md')