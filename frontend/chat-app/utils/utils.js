export function select(className, context) {
    const root = context ?? this.shadowRoot;
    const node = className ? root.querySelector(className) : null;
    return node ?? root;
}

export function addListeners([node, event, listener]) {
    node()?.addEventListener(event, listener);
}

export function removeListeners([node, event, listener]) {
    node()?.removeEventListener(event, listener);
}

export function getAvatarLetters(firstWord, secondWord) {
  const secondLetter = secondWord ? secondWord[0] : firstWord[firstWord.length - 1]
  return (firstWord[0]+secondLetter).toUpperCase()
}