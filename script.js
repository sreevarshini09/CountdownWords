function updateCounter() {
    const textInput = document.getElementById('textInput');
    const totalChars = document.getElementById('totalChars');
    const remainingChars = document.getElementById('remainingChars');
    const maxChars = 50;

    let textLength = textInput.value.length;
    totalChars.textContent = textLength;
    remainingChars.textContent = maxChars - textLength;
}