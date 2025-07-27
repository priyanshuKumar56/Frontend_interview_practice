const list1 = document.getElementById("drag-list");
const list2 = document.getElementById("drag-list2");
const parent = list1.parentElement;
const parentNode = list1.parentNode;
console.log(parent, parentNode);

let draggedItem = null;

function setupListDragDrop(list) {
  list.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "LI") {
      draggedItem = e.target;
      setTimeout(() => {
        e.target.classList.add("dragging");
      }, 0);
    }
  });

  list.addEventListener("dragend", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.remove("dragging");
      draggedItem = null;
    }
  });

  list.addEventListener("dragover", (e) => {
    e.preventDefault();

    const afterElement = getDragAfterElement(list, e.clientY);
    // console.log(afterElement);
    if (!draggedItem) return;
    if (afterElement == null) {
      list.appendChild(draggedItem);
    } else {
      list.insertBefore(draggedItem, afterElement);
    }
  });

  list.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedItem && e.target !== draggedItem) {
      list.appendChild(draggedItem);
    }
  });
}

function getDragAfterElement(container, y) {
  const items = [...container.querySelectorAll("li:not(.dragging)")];
  console.log(items);
  return items.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      console.log(offset, child);
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

// Apply to both lists
setupListDragDrop(list1);
setupListDragDrop(list2);
