
 Given('user navigate to the amazon page',()=>{
    cy.visit('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=486386870124&hvpos=&hvnetw=g&hvrand=17912469551162617096&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9300987&hvtargid=kwd-10573980&hydadcr=14453_2154448&gclid=CjwKCAiA24SPBhB0EiwAjBgkhtIo4dcCxFRXMQfC_Qfz03xVn5IYJSYV-m5v27mHEy0BCO4yCJfUoBoChBgQAvD_BwE', {
                headers: {
                    "Accept-Encoding": "gzip, deflate"
                }
            })
})

 When('user seach shoes',()=>{
     cy.get('#twotabsearchtextbox').click().type('shoes')
     cy.get('#nav-search-submit-button').click()
 })

 Then ('user verify value',()=>{
     cy.url().should('include','amazon.in')
 })

 Then('user apply filter',()=>{
     cy.get('.a-size-base.a-color-base').contains("Men's Running Shoes").click()
     cy.get('.a-section.sf-filter-section').eq(5).find('span').find('a').contains('Adidas').click()
     
 })

Then('validate specific product details',()=>{

    cy.get('.a-link-normal.s-no-outline').invoke('removeAttr','target')
    cy.get('.a-section.aok-relative.s-image-tall-aspect').find('img[src="https://m.media-amazon.com/images/I/71UWY+VcbML._AC_UL320_.jpg"]').last().click()    
    cy.get('#native_dropdown_selected_size_name').realClick().select('2,B094QD9NW2')
    cy.contains('adidas India Marketing Pvt. Ltd, adidas India Marketing Pvt. Ltd').should('have.text','adidas India Marketing Pvt. Ltd, adidas India Marketing Pvt. Ltd')
    cy.contains('Generic Name').next().should('have.text','Running Shoe')
    cy.get('.a-list-item').eq(21).should('have.text',' Upper Material: Synthetic; Outer Sole: Rubber; Insole: Comfort Insole  ')
    cy.get('.a-list-item').eq(23).should('have.text',' Fastening: Lace-up; Ankle Height: Regular  ')

})

Then('product add to cart',()=>{
    cy.get('.a-icon.a-accordion-radio.a-icon-radio-inactive').realClick()
    cy.get('#add-to-cart-button').realClick()
    cy.get('.a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold').should('have.text','\nAdded to Cart\n')
})











