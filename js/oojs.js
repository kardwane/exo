function Personne(prenom, nom, age, genre, interets) {
    this.nom = {
      prenom,
      nom
    };
    this.age = age;
    this.genre = genre;
    this.interets = interets;
  };

  Personne.prototype.saluer = function() {
    alert('Salut! Je suis ' + this.nom.prenom + '.');
  };

  let perso = new Object({
    nom: 'dupont', 
    prenom:'jean'
  })

/*   function Professeur(prenom, nom, age, genre, interets, matiere) {
    Personne.call(this, prenom, nom, age, genre, interets);
  
    this.matiere = matiere;
  } */

  function Professeur(prenom, nom, age, genre, interets, matiere) {
    this.nom_complet = {
      prenom,
      nom
    };
    this.age = age;
    this.genre = genre;
    this.interets = interets;
    this.matiere = matiere;
  }

  Professeur.prototype = Object.create(Personne.prototype);
  Professeur.prototype.constructor = Professeur;

  Professeur.prototype.saluer = function() {
    var prefix;
  
    if (this.genre === 'mâle' || this.genre === 'Mâle' || this.genre === 'm' || this.genre === 'M') {
      prefix = 'M.';
    } else if (this.genre === 'femelle' || this.genre === 'Femelle' || this.genre === 'f' || this.genre === 'F') {
      prefix = 'Mme';
    } else {
      prefix = '';
    }
  
    alert('Bonjour. Mon nom est ' + prefix + ' ' + this.nom_complet.nom + ', et j\'enseigne ' + this.matiere + '.');
  };

  function Etudiant(prenom, nom, age, genre, interets, classe) {
    Personne.call(this, prenom, nom, age, genre, interets);
    
    this.classe = classe;
  } 

  Etudiant.prototype.saluer = function() {
      console.log('mes parents m\'ont désigné comme étant '+this.nom.prenom)
  }

  let john = new Etudiant('john', 'doe', 40, "homme", ['coder en JS', 'le tricot']);
  john.saluer()