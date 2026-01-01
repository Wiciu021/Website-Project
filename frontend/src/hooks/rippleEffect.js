export function createRipple(e) {
    const button = e.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;

    circle.classList.add("ripple");
    button.appendChild(circle);

  // Remove automatically after animation
    circle.addEventListener("animationend", () => circle.remove());
}

export function clearRipple(e) {
    const ripple = e.currentTarget.querySelector(".ripple");
    if (ripple) ripple.remove();
}