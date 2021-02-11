export const screenResolutions = [
  'iphone-6+',
  'iphone-8',
  'iphone-x',
  'iphone-xr',
  'ipad-2',
  [1024, 768], [1920, 1080]
];

export const getCurrentResolution = (resolution) => {
  return Cypress._.isArray(resolution)
    ? cy.viewport(resolution[0], resolution[1])
    : cy.viewport(resolution);
};
