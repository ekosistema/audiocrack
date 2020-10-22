  Howler.autoUnlock = false;

//*********************  salad parameters  *******************//

  var pads = new Howl({
    src: ['assets/audio/salad/pads.wav'],
    loop: true,
    volume: 1,
    rate: 0.8,
    onplay: function() {
        this.fade(0,1,2000)
    },
    onend: function() {
        this.fade(1,0,2000);
    }
  });

  var pasos = new Howl({
    src: ['assets/audio/salad/pasos.wav'],
    loop: true,
    volume: 0.4,
    rate: 0.3,
    onplay: function() {
        this.fade(0,1,2000)
    },
    onend: function() {
        this.fade(1,0,1000);
    }
  });

  var clicks = new Howl({
    src: ['assets/audio/salad/clicks.wav'],
    loop: true,
    volume: 0.2,
    rate: 0.3,
    onplay: function() {
        this.fade(0,1,2000)
    },
    onend: function() {
        this.fade(1,0,6000);
    }
  });

//*********************  sweet parameters  *******************//

var beats = new Howl({
  src: ['assets/audio/sweet/beats.wav'],
  loop: true,
  volume: 0.5,
  rate: 0.5,
  onplay: function() {
      this.fade(0,0.4,2000)
  },
  onend: function() {
      this.fade(0.4,0,2000);
  }
});

var papel = new Howl({
  src: ['assets/audio/sweet/papel.wav'],
  loop: true,
  volume: 0.2,
  rate: 0.3,
  onplay: function() {
      this.fade(0,0.5,2000)
  },
  onend: function() {
      this.fade(1,0.5,1000);
  }
});

var sinte = new Howl({
  src: ['assets/audio/sweet/sinte.wav'],
  loop: true,
  volume: 0.01,
  rate: 0.5,
  onplay: function() {
      this.fade(0,0.3,2000)
  },
  onend: function() {
      this.fade(0.3,0,6000);
  }
});

//*********************  spicy parameters  *******************//

var beat = new Howl({
  src: ['assets/audio/spicy/beat.wav'],
  loop: true,
  volume: 0.2,
  rate: 0.8,
  onplay: function() {
      this.fade(0,0.1,2000)
  },
  onend: function() {
      this.fade(0.1,0,3000);
  }
});

var guitar = new Howl({
  src: ['assets/audio/spicy/guitar.wav'],
  loop: true,
  volume: 0.2,
  rate: 0.4,
  onplay: function() {
      this.fade(0,0.2,2000)
  },
  onend: function() {
      this.fade(0.2,0,3000);
  }
});

var piano = new Howl({
  src: ['assets/audio/spicy/piano.wav'],
  loop: true,
  volume: 0.2,
  rate: 0.4,
  onplay: function() {
      this.fade(0,0.2,2000)
  },
  onend: function() {
      this.fade(0.2,0,8000);
  }
});

//*********************  play audio  *******************//

let play = function(name) {

  if (name == 'salad') {
    
    pads.play();
    pasos.play();
    clicks.play();

} else if (name == 'sweet') {
    
    beats.play();
    papel.play();
    sinte.play();

  } else if (name == 'spicy') {

    beat.play();
    guitar.play();
    piano.play();

  }

  console.log("Audio started!");
}

//*********************  stop audio  *******************//

function detenerAudio(name) {
 
  if (name == 'salad') {
    
    pads.stop();
    pasos.stop();
    clicks.stop();

} else if (name == 'sweet') {
    
    beats.stop();
    papel.stop();
    sinte.stop();

  } else if (name == 'spicy') {

    beat.stop();
    guitar.stop();
    piano.stop();

  }

    console.log("Audio stopped");

}
