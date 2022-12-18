const input = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list")


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
        tasksList.innerHTML += `
            <div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;

        input.value = "";

        const removeButton = Array.from(document.getElementsByClassName("task__remove"));
        removeButton.forEach(button => button.onclick = () => {
            const parent = button.closest(".task")
            parent.remove();
        })
    }
});
