// ==========================
// BIRTHDAY WEBSITE SCRIPT
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // COUNTDOWN TIMER
    // ==========================

    const birthdayDate = new Date("October 18, 2026 00:00:00").getTime();

    const countdown = setInterval(() => {

        const now = new Date().getTime();
        const distance = birthdayDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");

        if (distance < 0) {

            clearInterval(countdown);

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

        }

    }, 1000);

    // ==========================
    // MUSIC CONTROL
    // ==========================

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    let isPlaying = false;

    musicBtn.addEventListener("click", () => {

        if (!isPlaying) {

            music.play();

            musicBtn.textContent = "⏸ Pause Music";

            isPlaying = true;

        } else {

            music.pause();

            musicBtn.textContent = "🎵 Play Music";

            isPlaying = false;

        }

    });

    // ==========================
    // OPEN LETTER
    // ==========================

    const letterBtn = document.getElementById("openLetterBtn");
    const letter = document.getElementById("letter");

    letterBtn.addEventListener("click", () => {

        if (
            letter.style.display === "none" ||
            letter.style.display === ""
        ) {

            letter.style.display = "block";

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            letterBtn.textContent =
                "💌 Letter Opened";

        }

    });

    // ==========================
    // GIFT BOX REVEAL
    // ==========================

    const giftBox = document.getElementById("giftBox");
    const giftMessage =
        document.getElementById("giftMessage");

    giftBox.addEventListener("click", () => {

        giftMessage.style.display = "block";

        giftBox.innerHTML = "❤️";

        giftBox.style.transform = "scale(1.2)";

        giftMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

    // ==========================
    // GALLERY LIGHTBOX
    // ==========================

    const galleryImages =
        document.querySelectorAll(".gallery img");

    galleryImages.forEach((img) => {

        img.addEventListener("click", () => {

            const lightbox =
                document.createElement("div");

            lightbox.id = "lightbox";

            lightbox.style.position = "fixed";
            lightbox.style.top = "0";
            lightbox.style.left = "0";
            lightbox.style.width = "100%";
            lightbox.style.height = "100%";
            lightbox.style.background =
                "rgba(0,0,0,0.95)";
            lightbox.style.display = "flex";
            lightbox.style.alignItems = "center";
            lightbox.style.justifyContent = "center";
            lightbox.style.zIndex = "9999";
            lightbox.style.cursor = "pointer";

            const image =
                document.createElement("img");

            image.src = img.src;

            image.style.maxWidth = "90%";
            image.style.maxHeight = "90%";
            image.style.border =
                "3px solid gold";
            image.style.borderRadius = "15px";

            lightbox.appendChild(image);

            document.body.appendChild(lightbox);

            lightbox.addEventListener(
                "click",
                () => {
                    lightbox.remove();
                }
            );

        });

    });

    // ==========================
    // SCROLL ANIMATION
    // ==========================

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0px)";

                }

            });

        }, {
            threshold: 0.1
        });

    const sections =
        document.querySelectorAll("section");

    sections.forEach((section) => {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(60px)";

        section.style.transition =
            "all 1s ease";

        observer.observe(section);

    });

    // ==========================
    // HERO SECTION VISIBLE
    // ==========================

    const hero =
        document.querySelector(".hero");

    hero.style.opacity = "1";

    hero.style.transform =
        "translateY(0px)";

});

// ==========================
// CONSOLE MESSAGE ❤️
// ==========================

console.log(`
====================================
Happy Birthday Butki ❤️
Made with Love by Pawan
====================================
`);