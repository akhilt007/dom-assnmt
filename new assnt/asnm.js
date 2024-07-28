function changeTextColor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedColor = colorSelect.value;
    const text = document.getElementById('text');
    text.style.color = selectedColor;
}


