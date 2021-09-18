"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateTemplate = (componentName) => {
    const interfaceName = `${componentName}Props`;
    return `
import React from 'react';

export interface ${interfaceName} {};

export const ${componentName}: React.FC<${interfaceName}> {
  return <></>;
}
  `;
};
exports.default = generateTemplate;
