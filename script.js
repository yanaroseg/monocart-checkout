document.addEventListener("DOMContentLoaded", () => {
    const togglePromoBtn = document.getElementById("toggle-promo");
    const discountRow = document.getElementById("discount-row");
    const totalValNode = document.getElementById("total-val");

    let isPromoApplied = true;

    togglePromoBtn.addEventListener("click", () => {
        isPromoApplied = !isPromoApplied;

        if (isPromoApplied) {
            discountRow.style.display = "flex";
            totalValNode.textContent = "$39.00";
            togglePromoBtn.textContent = "Remove Promo Code";
        } else {
            discountRow.style.display = "none";
            totalValNode.textContent = "$49.00";
            togglePromoBtn.textContent = "Apply Promo [ MINIMAL ]";
        }
    });
});