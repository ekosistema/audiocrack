  
/**
 * Set the parameters for audiocrack algorithmic compositions
 * @author  Marcos Martí 
 * {@link https://github.com/ekosistema}
 * @version 2.1
 */  
  
  Howler.autoUnlock = false;

  let random = 0.1 + Math.random();

//*********************  salad parameters  *******************//

  var pads = new Howl({
    src: ['../assets/audio/salad/pads.wav'],
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
    src: ['../assets/audio/salad/pasos.wav'],
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
    src: ['../assets/audio/salad/clicks.wav'],
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
    src: ['../assets/audio/sweet/beat.wav'],
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
    src: ['../assets/audio/sweet/paper.wav'],
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
    src: ['../assets/audio/sweet/synth.wav'],
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
    src: ['../assets/audio/spicy/beat.wav'],
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
    src: ['../assets/audio/spicy/guitar.wav'],
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
    src: ['../assets/audio/spicy/piano.wav'],
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

  let playSalad = function() {
      
      this.pads.play();
      setTimeout(() => this.pasos.play(), random * 10000);
      setTimeout(() => this.clicks.play(), random * 20000);
      this.printPlay();
  }

  let playSweet = function() {
      
      this.sinte.play();
      setTimeout(() => this.papel.play(), random * 10000);
      setTimeout(() => this.beats.play(), random * 20000);
      this.printPlay();
  }

  let playSpicy = function() {

      this.beat.play();
      setTimeout(() => this.guitar.play(), random * 10000);
      setTimeout(() => this.piano.play(), random * 20000);
      this.printPlay();

  }

  function printPlay() {

    console.log("Audio started!");

  }  

//*********************  stop audio  *******************//

  function detenerSalad() {
      
      this.pads.stop();
      this.pasos.stop();
      this.clicks.stop();
      this.printDetener();
  }

  function detenerSweet() {
      
      this.beats.stop();
      this.papel.stop();
      this.sinte.stop();
      this.printDetener();

  }

  function detenerSpicy() {

      this.beat.stop();
      this.guitar.stop();
      this.piano.stop();
      this.printDetener();

    }

    function printDetener() {

      console.log("Audio stopped!");
      location.reload();

    }
