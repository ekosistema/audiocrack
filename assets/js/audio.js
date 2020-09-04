// Establish tempo 60 bpm
Tone.Transport.bpm.value = 50;

// Initialize transport
Tone.Transport.start();

// Start / Stop audio

function reproducir() {

    document
        .getElementById("start")
        .addEventListener("click", async () => {
            var context = new AudioContext();
            Tone.start();
            console.log("context started");
            console.log('Playback resumed successfully');
        });
}

function detener() {
    document
        .getElementById("stop")
        .addEventListener("click", async () => {
            Tone.context.close();
            console.log("context stopped");
        });
}

// Assign random number
var random = Math.random();

// Sampler
var bufferPasos = new Tone.Buffer("assets/audio/pasos.wav", "load");
var bufferPads = new Tone.Buffer("assets/audio/pads.wav", "load");
var bufferClicks = new Tone.Buffer("assets/audio/clicks.wav", "load");

var sampler = new Tone.Sampler({
    urls: {
        C1: bufferPasos,
    },
    baseUrl: "https://#",
    onload: () => {
        bufferPasos.triggerAttackRelease(["C0"], (random + random) * 4);
    },
}).toDestination();

var sampler2 = new Tone.Sampler({
    urls: {
        C1: bufferPads,
    },
    baseUrl: "https://#",
    onload: () => {
        bufferPads.triggerAttackRelease(["C1"], (random + random) * 2);
    },
}).toDestination();

var clicks = new Tone.Sampler({
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
    sampler.triggerAttackRelease(
        "C-1",
        (random + 0.5) * 8,
        (random + 0.5) * 4
    );
}, 4).start(random * 2).loop = true);

var loopPads = (new Tone.Loop((random) => {
    sampler2.triggerAttackRelease(
        "C1",
        (random + 0.5) * 4,
        (random + 0.5) * 2
    );
}, 1).start(random).loop = true);

var loopClicks = (new Tone.Loop((random) => {
    clicks.triggerAttackRelease(
        "C0",
        (random + 0.5) * 8,
        (random + 0.5) * 8
    );
}, 8).start(random * 0.5).loop = true);