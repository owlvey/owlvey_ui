let _modalComponents = null;

export function loadModalComponents(modalComponents) {
  _modalComponents = modalComponents;
}

export function getComponent(componentName) {
  return _modalComponents[componentName];
}
