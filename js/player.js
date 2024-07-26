/**
 * File: player.js
 * Description: This file contains the logic to control audio playback using Tone.js, including synthesis effects, pitch shifting, and more.
 * 
 * Author: Marcos Martí (CeleroLab.Com)
 * Version: 4.0.0
 * 
 * URL: https://celerolab.com
 * GitHub: https://github.com/ekosistema/audiocrack
 * 
 * Notas:
 * - This file is part of the audiocrack project.
 * - Make sure to include the Tone.js library in your project before using this file.
 * 
 */

// Wait for the DOM content to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Reference to the play button element
    const playButton = document.getElementById('playButton');
    
    // State variable to keep track of whether audio is playing
    let isPlaying = false;
    
    // Arrays and variables to hold audio players and effects
    let players = [];
    let synth, pitchShifts = [], lfo, pannings = [], delays = [];

    // Array of musical notes and a randomly selected note
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const scale = Math.floor(Math.random() * 2 - 1); // Random scale value
    const randomNote = notes[Math.floor(Math.random() * notes.length)]; // Random note selection

    // Event listener for the play button click event
    playButton.addEventListener('click', function() {
        if (!isPlaying) {
            // Start playing audio
            startAudio();
            isPlaying = true;
            playButton.textContent = "stop"; // Change button text to "stop"
            playButton.classList.remove("play");
            playButton.classList.add("stop");
        } else {
            // Stop playing audio
            stopAudio();
            isPlaying = false;
            playButton.textContent = "play"; // Change button text back to "play"
            playButton.classList.remove("stop");
            playButton.classList.add("play");
        }
    });

    // Function to start playing audio
    function startAudio() {
        // Arrays containing paths to audio files for different categories
        const audioArrayA = ["/audio/a/01.wav", "/audio/a/02.wav", "/audio/a/03.wav", "/audio/a/04.wav", "/audio/a/05.wav", "/audio/a/06.wav", "/audio/a/07.wav", "/audio/a/08.wav", "/audio/a/09.wav", "/audio/a/10.wav"];
        const audioArrayB = ["/audio/b/01.wav", "/audio/b/02.wav", "/audio/b/03.wav", "/audio/b/04.wav", "/audio/b/05.wav", "/audio/b/06.wav", "/audio/b/07.wav", "/audio/b/08.wav", "/audio/b/09.wav", "/audio/b/10.wav"];
        const audioArrayC = ["/audio/c/01.wav", "/audio/c/02.wav", "/audio/c/03.wav", "/audio/c/04.wav", "/audio/c/05.wav", "/audio/c/06.wav", "/audio/c/07.wav", "/audio/c/08.wav", "/audio/c/09.wav", "/audio/c/10.wav"];
    
        // Randomly select an audio file from each category
        const randomAudioA = audioArrayA[Math.floor(Math.random() * audioArrayA.length)];
        const randomAudioB = audioArrayB[Math.floor(Math.random() * audioArrayB.length)];
        const randomAudioC = audioArrayC[Math.floor(Math.random() * audioArrayC.length)];

        // Create audio players using Tone.Player for each selected file
        const playerA = new Tone.Player({
            url: randomAudioA,
            loop: true,        // Enable looping
            autostart: true,   // Automatically start playing
            volume: -6,        // Initial volume level
            fadeOut: 8,        // Fade out duration
            fadeIn: 8          // Fade in duration
        }).toDestination();

        const playerB = new Tone.Player({
            url: randomAudioB,
            loop: true,
            autostart: true,
            volume: -6,
            fadeOut: 12,
            fadeIn: 12
        }).toDestination();

        const playerC = new Tone.Player({
            url: randomAudioC,
            loop: true,
            autostart: true,
            volume: -6,
            fadeOut: 16,
            fadeIn: 16
        }).toDestination();

        // Store players in the players array
        players = [playerA, playerB, playerC];

        // Apply pitch shift effect to each audio player
        pitchShifts = [
            new Tone.PitchShift({ pitch: Math.floor(Math.random() * 3) - 1 }).toDestination(),
            new Tone.PitchShift({ pitch: Math.floor(Math.random() * 3) - 1 }).toDestination(),
            new Tone.PitchShift({ pitch: Math.floor(Math.random() * 3) - 1 }).toDestination()
        ];

        // Connect each player to its respective pitch shift effect
        players[0].connect(pitchShifts[0]);
        players[1].connect(pitchShifts[1]);
        players[2].connect(pitchShifts[2]);

        // Randomly adjust playback rates for each player
        players[0].playbackRate = Math.random() * 0.25 + 0.1;
        players[1].playbackRate = Math.random() * 0.2 + 0.1;
        players[2].playbackRate = Math.random() * 0.15 + 0.1;

        // Create an FM synthesizer with randomized settings
        synth = new Tone.FMSynth({
            harmonicity: 5 * Math.random(),
            modulationIndex: 10,
            detune: Math.random(),
            oscillator: { type: "sine" },
            envelope: { attack: Math.random(), decay: Math.random(), sustain: Math.random(), release: Math.random() },
            modulation: { type: "triangle" },
            modulationEnvelope: { attack: Math.random(), decay: 0.5, sustain: Math.random(), release: 0.5 },
            volume: -6,
            fadeOut: 8,
            fadeIn: 8
        }).toDestination();
        
        // Trigger the FM synth to play the randomly selected note
        if (randomNote) {
            synth.triggerAttack(randomNote + scale);
        } else {
            console.error("Invalid note:", randomNote);
        }

        // Setup panning effects for each player
        pannings = [
            new Tone.Panner(Math.random()).toDestination(),
            new Tone.Panner(Math.random()).toDestination(),
            new Tone.Panner(Math.random()).toDestination()
        ];

        // Connect players to their respective panning effects
        players[0].connect(pannings[0]);
        players[1].connect(pannings[1]);
        players[2].connect(pannings[2]);

        // Create and start an LFO for modulation effects
        lfo = new Tone.LFO({
            type: "sine",
            min: -1,
            max: 1,
            frequency: Math.random() * 0.2
        }).start();

        // Connect the LFO to various parameters of the synth and panning effects
        lfo.connect(synth.detune);
        lfo.connect(synth.envelope);
        lfo.connect(synth.modulationIndex);
        lfo.connect(synth.harmonicity);
        lfo.connect(pannings[0].pan);

        // Apply delay effects to each player
        delays = [
            new Tone.Delay(0.8).toDestination(),
            new Tone.Delay(0.9).toDestination(),
            new Tone.Delay(0.7).toDestination()
        ];

        // Connect players to their respective delay effects
        players[0].connect(delays[0]);
        players[1].connect(delays[1]);
        players[2].connect(delays[2]);
    }

    // Function to stop playing audio
    function stopAudio() {
        // Stop all audio players
        players.forEach(player => player.stop());
        
        // Stop the FM synth and disconnect all effects
        if (synth) synth.triggerRelease();
        if (lfo) lfo.stop();
        pitchShifts.forEach(shift => shift.disconnect());
        pannings.forEach(pan => pan.disconnect());
        delays.forEach(delay => delay.disconnect());
    }
});
