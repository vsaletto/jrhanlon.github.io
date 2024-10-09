// Function to play audio and fade button
function handleAudioButtonClick(buttonId, audioId) {
    const audioButton = document.getElementById(buttonId);
    const audio = document.getElementById(audioId);

    audioButton.classList.add('faded'); // Add faded effect to button
    audio.play(); // Play audio

    // When the audio ends, remove the faded effect
    audio.onended = function() {
        audioButton.classList.remove('faded');
    };
}

// Add event listeners for all four buttons
document.getElementById('audio-button-1').addEventListener('click', function() {
    handleAudioButtonClick('audio-button-1', 'audio-1');
});

document.getElementById('audio-button-2').addEventListener('click', function() {
    handleAudioButtonClick('audio-button-2', 'audio-2');
});

document.getElementById('audio-button-3').addEventListener('click', function() {
    handleAudioButtonClick('audio-button-3', 'audio-3');
});

document.getElementById('audio-button-4').addEventListener('click', function() {
    handleAudioButtonClick('audio-button-4', 'audio-4');
});
