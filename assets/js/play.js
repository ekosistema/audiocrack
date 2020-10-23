  
/**
 * Set the parameters for audiocrack algorithmic compositions
 * @author  Marcos Martí 
 * {@link https://github.com/ekosistema}
 * @version 2.0
 */  
  
  Howler.autoUnlock = false;

  let random = Math.random();

//*********************  salad parameters  *******************//

  var pads = new Howl({
    src: ['assets/audio/salad/pads.wav'],
    loop: true,
    volume: 1,
    rate: random * 0.8,
    onplay: function() {
        this.fade(0,random * 1,2000)
    },
    onend: function() {
        this.fade(random * 1,0,2000);
    }
  });

  var pasos = new Howl({
    src: ['assets/audio/salad/pasos.wav'],
    loop: true,
    volume: 0.4,
    rate: random * 0.3,
    onplay: function() {
        this.fade(0,random * 1,2000)
    },
    onend: function() {
        this.fade(random * 1,0,1000);
    }
  });

  var clicks = new Howl({
    src: ['assets/audio/salad/clicks.wav'],
    loop: true,
    volume: 0.2,
    rate: random * 0.3,
    onplay: function() {
        this.fade(0,random * 1,2000)
    },
    onend: function() {
        this.fade(random * 1,0,6000);
    }
  });

//*********************  sweet parameters  *******************//

var beats = new Howl({
  src: ['assets/audio/sweet/beats.wav'],
  loop: true,
  volume: 0.5,
  rate: random * 0.5,
  onplay: function() {
      this.fade(0,random * 0.5,2000)
  },
  onend: function() {
      this.fade(random * 0.5,0,2000);
  }
});

var papel = new Howl({
  src: ['assets/audio/sweet/papel.wav'],
  loop: true,
  volume: 0.2,
  rate: random * 0.3,
  onplay: function() {
      this.fade(0,random * 0.5,2000)
  },
  onend: function() {
      this.fade(1,random * 0.5,1000);
  }
});

var sinte = new Howl({
  src: ['assets/audio/sweet/sinte.wav'],
  loop: true,
  volume: 0.01,
  rate: random * 0.5,
  onplay: function() {
      this.fade(0,random * 0.5,2000)
  },
  onend: function() {
      this.fade(random * 0.5,0,6000);
  }
});

//*********************  spicy parameters  *******************//

var beat = new Howl({
  src: ['assets/audio/spicy/beat.wav'],
  loop: true,
  volume: 0.2,
  rate: random * 0.8,
  onplay: function() {
      this.fade(0,random * 0.5,2000)
  },
  onend: function() {
      this.fade(random * 0.5,0,3000);
  }
});

var guitar = new Howl({
  src: ['assets/audio/spicy/guitar.wav'],
  loop: true,
  volume: 0.2,
  rate: random * 0.8,
  onplay: function() {
      this.fade(random * 0,0.5,2000)
  },
  onend: function() {
      this.fade(random * 0.5,0,3000);
  }
});

var piano = new Howl({
  src: ['assets/audio/spicy/piano.wav'],
  loop: true,
  volume: 0.2,
  rate: random * 0.8,
  onplay: function() {
      this.fade(0,random * 0.5,2000)
  },
  onend: function() {
      this.fade(random * 0.5,0,8000);
  }
});

//*********************  play audio  *******************//

let play = function(name) {

  if (name == 'salad') {
    
    pads.play();
    setTimeout(() => pasos.play(), random * 10000);
    setTimeout(() => clicks.play(), random * 20000);

} else if (name == 'sweet') {
    
    sinte.play();
    setTimeout(() => papel.play(), random * 10000);
    setTimeout(() => beats.play(), random * 20000);

  } else if (name == 'spicy') {

    beat.play();
    setTimeout(() => guitar.play(), random * 10000);
    setTimeout(() => piano.play(), random * 20000);

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

    console.log("Audio stopped!");
    location.reload();

}
