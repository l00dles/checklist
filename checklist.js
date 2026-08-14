document.addEventListener("DOMContentLoaded", function () {
  const checkboxes =
    document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {

    // Markdown task-list checkboxes may be rendered disabled.
    checkbox.disabled = false;

    // Use checklist text as the saved key.
    const text =
      checkbox.parentElement.textContent.trim();

    const key =
      "checklist:" + text;

    // Restore saved state.
    const saved =
      localStorage.getItem(key);

    if (saved !== null) {
      checkbox.checked = saved === "true";
    }

    // Save whenever checkbox is changed.
    checkbox.addEventListener("change", function () {
      localStorage.setItem(
        key,
        checkbox.checked
      );
    });

  });
});