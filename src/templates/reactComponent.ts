const generateTemplate = (componentName: string) => {
  const interfaceName = `${componentName}Props`;

  return `
import React from 'react';

export interface ${interfaceName} {};

export const ${componentName}: React.FC<${interfaceName}> {
  return <></>;
}
  `;
}

export default generateTemplate;
