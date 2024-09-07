function startMatrix() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    document.getElementById('matrix').appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const letters = Array.from({ length: columns }).fill(0);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;

        letters.forEach((y, index) => {
            const text = String.fromCharCode(33 + Math.random() * 94); // Carácter entre '!' y '~'
            const x = index * fontSize;
            ctx.fillText(text, x, y);

            letters[index] = y > canvas.height || Math.random() > 0.975 ? 0 : y + fontSize;
        });
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

document.addEventListener('DOMContentLoaded', startMatrix);
