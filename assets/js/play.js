  
/**
 * audiocrack :: random algorithmic compositions
 * @author  Marcos Martí 
 * {@link https://github.com/ekosistema}
 * @version 2.1
 */  
  
  Howler.autoUnlock = false;

  let random = 0.5 + Math.random();

//*********************  salad parameters  *******************//

  var pads = new Howl({
    src: ['https://res.cloudinary.com/dvw01wakw/video/upload/v1607022380/audiocrack/audio/salad/pads_hqcu9p.wav'],
    loop: true,
    volume: 1,
    rate: random * 0.8,
    onplay: function() {
        this.fade(0,random,2000)
    },
    onend: function() {
        this.fade(random,0,2000);
    }
  });

  var pasos = new Howl({
    src: ['https://res.cloudinary.com/dvw01wakw/video/upload/v1607022381/audiocrack/audio/salad/pasos_l2mtmb.wav'],
    loop: true,
    volume: 0.4,
    rate: random * 0.3,
    onplay: function() {
        this.fade(0,random,2000)
    },
    onend: function() {
        this.fade(random,0,1000);
    }
  });

  var clicks = new Howl({
    src: ['https://res.cloudinary.com/dvw01wakw/video/upload/v1607022381/audiocrack/audio/salad/clicks_lcgxug.wav'],
    loop: true,
    volume: 0.2,
    rate: random * 0.3,
    onplay: function() {
        this.fade(0,random,2000)
    },
    onend: function() {
        this.fade(random,0,6000);
    }
  });

//*********************  sweet parameters  *******************//

  var beats = new Howl({
    src: ['https://res.cloudinary.com/dvw01wakw/video/upload/v1607022380/audiocrack/audio/sweet/beat_livzes.wav'],
    loop: true,
    volume: 0.5,
    rate: random * 0.5,
    onplay: function() {
        this.fade(0,random,2000)
    },
    onend: function() {
        this.fade(random,0,2000);
    }
  });

  var papel = new Howl({
    src: ['https://res.cloudinary.com/dvw01wakw/video/upload/v1607022382/audiocrack/audio/sweet/paper_bdpzu9.wav'],
    loop: true,
    volume: 0.2,
    rate: random * 0.3,
    onplay: function() {
        this.fade(0,random,2000)
    },
    onend: function() {
        this.fade(1,random,1000);
    }
  });

  var sinte = new Howl({
    src: ['https://res.cloudinary.com/dvw01wakw/video/upload/v1607022382/audiocrack/audio/sweet/synth_ltbpld.wav'],
    loop: true,
    volume: 0.01,
    rate: random * 0.5,
    onplay: function() {
        this.fade(0,random,2000)
    },
    onend: function() {
        this.fade(random,0,6000);
    }
  });

//*********************  spicy parameters  *******************//

  var beat = new Howl({
    src: ['https://res.cloudinary.com/dvw01wakw/video/upload/v1607022379/audiocrack/audio/spicy/beat_iadent.wav'],
    loop: true,
    volume: 0.2,
    rate: random * 0.8,
    onplay: function() {
        this.fade(0,random,2000)
    },
    onend: function() {
        this.fade(random,0,3000);
    }
  });

  var guitar = new Howl({
    src: ['https://res.cloudinary.com/dvw01wakw/video/upload/v1607022380/audiocrack/audio/spicy/guitar_uj0yzc.wav'],
    loop: true,
    volume: 0.2,
    rate: random * 0.8,
    onplay: function() {
        this.fade(0,random,2000)
    },
    onend: function() {
        this.fade(random,0,3000);
    }
  });

  var piano = new Howl({
    src: ['https://res.cloudinary.com/dvw01wakw/video/upload/v1607022379/audiocrack/audio/spicy/piano_unvh3k.wav'],
    loop: true,
    volume: 0.2,
    rate: random * 0.8,
    onplay: function() {
        this.fade(0,random,2000)
    },
    onend: function() {
        this.fade(random,0,8000);
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
