// Partie du script traitant le "chargement"
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loader").style.opacity = 0;
        document.getElementById("charge").style.opacity = 0; // Disparition des éléments de l'écran de chargement
        document.getElementById("titre").style.opacity = 1; // Apparition de la page d'accueil
        setTimeout(function () {
            document.getElementById("loader").style.display = "none";
            document.getElementById("charge").style.display = "none";
            document.getElementById("titre").style.display = "block";
        }, 1500); // Temps correspondant à la durée de transition cachant l'écran de chargement
    }, 9000); // Simulation d'un délai de chargement
});


// Partie du script traitant le son de démarrage (1er easter egg)
var audioWii = document.getElementById('wii_sports');
var titre = document.getElementById('titre');
titre.addEventListener('click', function() {
    if (audioWii.paused) {
      audioWii.play();
    } else {
      audioWii.pause();
    } // Si le son est en pause, il démarre ; dans le cas contraire, il s'arrête
});


// Partie du script traitant le son "bonus" (2ème easter egg)
var audioBonus = document.getElementById('son_bonus');
var vie = document.getElementById('up');
vie.addEventListener('click', function() {
    if (audioBonus.paused) {
      audioBonus.play();
    } else {
      audioBonus.pause();
    }
});


// Partie du script traitant la fresque de Mario (3ème easter egg)
var audioJump = document.getElementById('son_saut');
var immobile = document.getElementById('mario');
var saut = document.getElementById('saut');
immobile.addEventListener('click', function() {
  audioJump.play();
  immobile.style.display = 'none';
  saut.style.display = 'inline'; // Au clic, l'image change (Mario saute)
  setTimeout(function () {
    document.getElementById("saut").style.display = "none";
    document.getElementById("mario").style.display = "inline";
}, 500); // Au bout d'une demi-seconde, l'image revient à son état initial (Mario revient au sol)
});

function animateImage(image) {
  image.classList.add('ecrase');
  playCrushSound();

  setTimeout(() => {
      image.style.display = 'none';
  }, 500);
}
function playCrushSound() {
  var crushSound = document.getElementById('son_ecrase');
  crushSound.play();
}

var audioChampi = document.getElementById('son_grandi');
var champignon = document.getElementById('champignon');
var grandissement = document.getElementById('grand');
champignon.addEventListener('click', function() {
    if (audioChampi.paused) {
      audioChampi.play();
      document.getElementById("mario").style.display = "none";
      document.getElementById("champignon").style.display = "none";
      document.getElementById("grand").style.display = "inline";
      document.getElementById("termine").style.display = "inline";
    } else {
      audioChampi.pause();
    }
});

var audioTermine = document.getElementById('son_termine');
var reussi = document.getElementById('termine');
reussi.addEventListener('click', function() {
    if (audioTermine.paused) {
      audioStart.pause();
      audioTermine.play();
      document.getElementById("termine").style.display = "none";
    } else {
      audioTermine.pause();
    }
});


// Partie du script traitant le son "générique" (4ème easter egg)
var audioStart = document.getElementById('son_start');
var commence = document.getElementById('start');
commence.addEventListener('click', function() {
    if (audioStart.paused) {
      audioStart.play();
    } else {
      audioStart.pause();
    }
});


// Partie du script traitant l'affiche sonorisée (5ème easter egg)
var audioNiveau = document.getElementById('son_niveau1');
var lanceur = document.getElementById('affiche');
lanceur.addEventListener('click', function() {
  if (audioNiveau.paused) {
    audioNiveau.play();
  } else {
    audioNiveau.pause();
  }
});


// Partie du script traitant les logos (6ème easter egg)
var audioSony = document.getElementById('PS1_image');
var audioMicrosoft = document.getElementById('XBOX_image');
var imageSony = document.getElementById('PS1');
var imageMicrosoft = document.getElementById('XBOX');
imageSony.addEventListener('click', function() {
  if (audioSony.paused) {
    audioSony.play();
  } else {
    audioSony.pause();
  }
});
imageMicrosoft.addEventListener('click', function() {
  if (audioMicrosoft.paused) {
    audioMicrosoft.play();
  } else {
    audioMicrosoft.pause();
  }
});


// Partie du script traitant le "démarrage" (7ème easter egg)
var audioLance = document.getElementById('Wii_image');
var console = document.getElementById('image1');
console.addEventListener('click', function() {
  if (audioLance.paused) {
    audioLance.play();
  } else {
    audioLance.pause();
  }
});


// Partie du script traitant le jukebox (8ème easter egg)
var playPiste1 = document.getElementById('piste1');
var playButton1 = document.getElementById('play1');
var pauseButton1 = document.getElementById('pause1');
var playPiste2 = document.getElementById('piste2');
var playButton2 = document.getElementById('play2');
var pauseButton2 = document.getElementById('pause2');
var playPiste3 = document.getElementById('piste3');
var playButton3 = document.getElementById('play3');
var pauseButton3 = document.getElementById('pause3');
var playPiste4 = document.getElementById('piste4');
var playButton4 = document.getElementById('play4');
var pauseButton4 = document.getElementById('pause4');
playButton1.addEventListener('click', function() {
  playPiste1.play();
  playPiste2.pause();
  playPiste3.pause();
  playPiste4.pause();
  playButton1.style.display = 'none';
  playButton2.style.display = 'inline';
  playButton3.style.display = 'inline';
  playButton4.style.display = 'inline';
  pauseButton1.style.display = 'inline';
  pauseButton2.style.display = 'none';
  pauseButton3.style.display = 'none';
  pauseButton4.style.display = 'none';
});
pauseButton1.addEventListener('click', function() {
  playPiste1.pause();
  playButton1.style.display = 'inline';
  pauseButton1.style.display = 'none';
});
playButton2.addEventListener('click', function() {
  playPiste1.pause();
  playPiste2.play();
  playPiste3.pause();
  playPiste4.pause();
  playButton1.style.display = 'inline';
  playButton2.style.display = 'none';
  playButton3.style.display = 'inline';
  playButton4.style.display = 'inline';
  pauseButton1.style.display = 'none';
  pauseButton2.style.display = 'inline';
  pauseButton3.style.display = 'none';
  pauseButton4.style.display = 'none';
});
pauseButton2.addEventListener('click', function() {
  playPiste2.pause();
  playButton2.style.display = 'inline';
  pauseButton2.style.display = 'none';
});
playButton3.addEventListener('click', function() {
  playPiste1.pause();
  playPiste2.pause();
  playPiste3.play();
  playPiste4.pause();
  playButton1.style.display = 'inline';
  playButton2.style.display = 'inline';
  playButton3.style.display = 'none';
  playButton4.style.display = 'inline';
  pauseButton1.style.display = 'none';
  pauseButton2.style.display = 'none';
  pauseButton3.style.display = 'inline';
  pauseButton4.style.display = 'none';
});
pauseButton3.addEventListener('click', function() {
  playPiste3.pause();
  playButton3.style.display = 'inline';
  pauseButton3.style.display = 'none';
});
playButton4.addEventListener('click', function() {
  playPiste1.pause();
  playPiste2.pause();
  playPiste3.pause();
  playPiste4.play();
  playButton1.style.display = 'inline';
  playButton2.style.display = 'inline';
  playButton3.style.display = 'inline';
  playButton4.style.display = 'none';
  pauseButton1.style.display = 'none';
  pauseButton2.style.display = 'none';
  pauseButton3.style.display = 'none';
  pauseButton4.style.display = 'inline';
});
pauseButton4.addEventListener('click', function() {
  playPiste4.pause();
  playButton4.style.display = 'inline';
  pauseButton4.style.display = 'none';
});

// Partie du script traitant la banque rétro (9ème easter egg)
var audioRetro1 = document.getElementById('retro1');
var audioRetro2 = document.getElementById('retro2');
var audioRetro3 = document.getElementById('retro3');
var audioRetro4 = document.getElementById('retro4');
var audioRetro5 = document.getElementById('retro5');
var audioRetro6 = document.getElementById('retro6');
var audioRetro7 = document.getElementById('retro7');
var audioRetro8 = document.getElementById('retro8');
var audioRetro9 = document.getElementById('retro9');
var imageJeu1 = document.getElementById('jeu1');
var imageJeu2 = document.getElementById('jeu2');
var imageJeu3 = document.getElementById('jeu3');
var imageJeu4 = document.getElementById('jeu4');
var imageJeu5 = document.getElementById('jeu5');
var imageJeu6 = document.getElementById('jeu6');
var imageJeu7 = document.getElementById('jeu7');
var imageJeu8 = document.getElementById('jeu8');
var imageJeu9 = document.getElementById('jeu9');

imageJeu1.addEventListener('click', function() {
  audioRetro1.play();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu2.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.play();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu3.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.play();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu4.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.play();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu5.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.play();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu6.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.play();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu7.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.play();
  audioRetro8.pause();
  audioRetro9.pause();
});
imageJeu8.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.play();
  audioRetro9.pause();
});
imageJeu9.addEventListener('click', function() {
  audioRetro1.pause();
  audioRetro2.pause();
  audioRetro3.pause();
  audioRetro4.pause();
  audioRetro5.pause();
  audioRetro6.pause();
  audioRetro7.pause();
  audioRetro8.pause();
  audioRetro9.play();
});


// Partie du script traitant l'arrivée au sondage
var playCache = document.getElementById('cache');
var direction = document.getElementById('fleche');
direction.addEventListener('click', function() {
  if (playCache.paused) {
    playCache.play();
  } else {
    playCache.pause();
  }
});


// Partie du script traitant l'envoi du mail d'évaluation
var playFerme = document.getElementById('ferme');
var fini = document.getElementById('fin');
fini.addEventListener('click', function() {
  if (playFerme.paused) {
    playFerme.play();
  } else {
    playFerme.pause();
  }
});
function afficherSection() {
  var section = document.getElementById("revoir");
  section.style.display = "block";
}