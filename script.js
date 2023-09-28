document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="completeBtn">Complete</button>
                <button class="deleteBtn">Delete</button>
            `;

            taskList.appendChild(li);
            taskInput.value = "";

            li.querySelector(".completeBtn").addEventListener("click", function () {
                li.classList.toggle("completed");
            });

            li.querySelector(".deleteBtn").addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });
});
