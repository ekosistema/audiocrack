//*********************  audio salty  *******************//

function audioSalty() {
    if (true) {
        reproducirSalty();
    }

    // Start audio Salty

    function reproducirSalty() {
        document
            .getElementById("startSalty")
            .addEventListener("click", async () => {
                Tone.context = new AudioContext();
                Tone.start();
                console.log("audio started");
            });
    }

    // Establish bpm
    Tone.Transport.bpm.value = 50;

    // Initialize transport
    Tone.Transport.start();

    // Assign random number
    var random = Math.random();

    // Sampler
    var bufferPasos = new Tone.Buffer("assets/audio/salty/pasos.wav", "load");
    var bufferPads = new Tone.Buffer("assets/audio/salty/pads.wav", "load");
    var bufferClicks = new Tone.Buffer("assets/audio/salty/clicks.wav", "load");

    var samplerPasos = new Tone.Sampler({
        urls: {
            C1: bufferPasos,
        },
        baseUrl: "https://#",
        onload: () => {
            bufferPasos.triggerAttackRelease(["C0"], (random + random) * 4);
        },
    }).toDestination();

    var samplerPads = new Tone.Sampler({
        urls: {
            C1: bufferPads,
        },
        baseUrl: "https://#",
        onload: () => {
            bufferPads.triggerAttackRelease(["C1"], (random + random) * 2);
        },
    }).toDestination();

    var samplerClicks = new Tone.Sampler({
        urls: {
            C1: bufferClicks,
        },
        baseUrl: "https://#",
        onload: () => {
            bufferClicks.triggerAttackRelease(["C0"], (random + random) * 6);
        },
    }).toDestination();

    //play sampler at random times

    var loopPasos = (new Tone.Loop((random) => {
        samplerPasos.triggerAttackRelease(
            "C-1",
            (random + 0.5) * 8,
            (random + 0.5) * 4
        );
    }, 4).start(random * 2).loop = true);

    var loopPads = (new Tone.Loop((random) => {
        samplerPads.triggerAttackRelease(
            "C1",
            (random + 0.5) * 4,
            (random + 0.5) * 2
        );
    }, 1).start(random).loop = true);

    var loopClicks = (new Tone.Loop((random) => {
        samplerClicks.triggerAttackRelease(
            "C0",
            (random + 0.5) * 8,
            (random + 0.5) * 8
        );
    }, 8).start(random * 0.5).loop = true);
}

function audioSweet() {
    if (true) {
        reproducirSweet();
    }


    //*********************  audio sweet  *******************//


    // Start audio Sweet

    function reproducirSweet() {
        document
            .getElementById("startSweet")
            .addEventListener("click", async () => {
                Tone.context = new AudioContext();
                Tone.start();
                console.log("audio started");
            });
    }

    // Establish bpm
    Tone.Transport.bpm.value = 40;

    // Initialize transport
    Tone.Transport.start();

    // Assign random number
    var random = Math.random();

    // Sampler
    var bufferBeats = new Tone.Buffer("assets/audio/sweet/Beats.wav", "load");
    var bufferSinte = new Tone.Buffer("assets/audio/sweet/Sinte.wav", "load");
    var bufferPapel = new Tone.Buffer("assets/audio/sweet/Papel.wav", "load");

    var samplerBeats = new Tone.Sampler({
        urls: {
            C1: bufferBeats,
        },
        baseUrl: "https://#",
        onload: () => {
            bufferBeats.triggerAttackRelease(["C0"], (random + random) * 4);
        },
    }).toDestination();

    var samplerSinte = new Tone.Sampler({
        urls: {
            C1: bufferSinte,
        },
        baseUrl: "https://#",
        onload: () => {
            bufferSinte.triggerAttackRelease(["C1"], (random + random) * 4);
        },
    }).toDestination();

    var samplerPapel = new Tone.Sampler({
        urls: {
            C1: bufferPapel,
        },
        baseUrl: "https://#",
        onload: () => {
            bufferPapel.triggerAttackRelease(["C0"], (random + random) * 6);
        },
    }).toDestination();

    //play sampler at random times

    var loopBeats = (new Tone.Loop((random) => {
        samplerBeats.triggerAttackRelease(
            "C-2",
            (random + 0.5) * 8,
            (random + 0.5) * 4
        );
    }, 4).start(random * 2).loop = true);

    var loopSinte = (new Tone.Loop((random) => {
        samplerSinte.triggerAttackRelease("C0", (random + 0.5) * 4, random * 4);
    }, 4).start(random).loop = true);

    var loopPapel = (new Tone.Loop((random) => {
        samplerPapel.triggerAttackRelease(
            "C-1",
            (random + 0.5) * 8,
            (random + 0.5) * 8
        );
    }, 8).start(random * 0.5).loop = true);
}

//*********************  stop audio  *******************//

function detenerAudio() {
    document.addEventListener("click", async () => {
        Tone.context.close();
        console.log("audio stopped");
        location.reload();
    });
}