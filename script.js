function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            setTimeout(callback, 600);
        }
    }
    typing();
}

window.onload = function() {
    const pageTitle = document.title;
    const speed = 40;

    if (pageTitle === "First Path") {
        const p1 = "The ocean breeze brings a sense of calm to your soul.";
        const p2 = "Let the waves wash away your worries and leave only peace behind.";
        typeWriter("text-paragraph-1", p1, speed, () => {
            typeWriter("text-paragraph-2", p2, speed);
        });
    } else if (pageTitle === "Second Path") {
        const p1 = "Life is like a cup of latte, it's all about how you make it.";
        const p2 = "Enjoy the sweetness and the warmth of every moment you have.";
        typeWriter("text-paragraph-1", p1, speed, () => {
            typeWriter("text-paragraph-2", p2, speed);
        });
    }
};
