function detenerAudio() {
    document.addEventListener("click", async () => {
        Tone.context.close();
        console.log("audio stopped");
        location.reload();
    });
}