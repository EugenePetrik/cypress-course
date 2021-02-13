export const screenResolutions = [
  'iphone-x',
  [1920, 1080]
];

export const getCurrentResolution = (resolution) => {
  return Cypress._.isArray(resolution)
    ? cy.viewport(resolution[0], resolution[1])
    : cy.viewport(resolution);
};
