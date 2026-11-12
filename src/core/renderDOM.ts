import Block from "./Block";

export function renderDOM(query: string, block: Block<any>) {
  const root = document.querySelector(query);

  // Можно завязаться на реализации вашего класса Block
  if (root) {
    root.append(block.getContent()!);

    block.dispatchComponentDidMount();
  } else {
    throw new Error("Element not found");
  }

  return root;
}
