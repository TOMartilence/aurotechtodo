document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const taskText = input.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                ${taskText}
                <button class="delete-btn">Delete</button>
            `;
            todoList.appendChild(li);
            input.value = '';
            input.focus();

            gsap.fromTo(li, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });

            li.querySelector('.delete-btn').addEventListener('click', () => {
                gsap.to(li, { opacity: 0, y: 20, duration: 0.5, onComplete: () => li.remove() });
            });
        }
    }
});
