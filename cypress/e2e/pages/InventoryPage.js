class InventoryPage {
  elements = {
    addBackpackButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    cartBadge: () => cy.get('[data-test="shopping-cart-badge"]')
  };

  addBackpack() {
    this.elements.addBackpackButton().click();
  }
}

export default InventoryPage; 