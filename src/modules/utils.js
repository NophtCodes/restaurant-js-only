export function createHtmlElement(type, id, classes, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (classes) element.classList.add(...classes);
    if (content) element.textContent = content;

    return element;
}