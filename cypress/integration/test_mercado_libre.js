describe('Product', function(){   
    context('720p resolution', () => {
        beforeEach(() => {
          // browser with a 720p monitor
          cy.viewport(1280, 720)
        })

        it.only('Login user',function(){    
            cy.visit('https://www.mercadolibre.com/jms/mec/lgz/login?platform_id=ML&go=https%3A%2F%2Farticulo.mercadolibre.com.ec%2FMEC-431576790-lenovo-l340-gaming-core-i5-9300hf-512gb-ssd-8gb-inc-factura-_JM%3FsearchVariation%3D88792207624&loginType=explicit#nav-header');
            cy.get('#user_id').type('espinozasebas94@gmail.com');
            cy.get('.andes-button--loud > .andes-button__content').click();
            //cy.pause();
        });

        it.only('Search a product with results',function(){
            cy.visit('https://www.mercadolibre.com.ec/');
            cy.get('.nav-search-input').clear().type('laptop lenovo');
            cy.get('.nav-search-btn').click();
            cy.get('.ui-search-breadcrumb__title').contains('Laptop lenovo');
        });

        it.only('Select first product',function(){
            cy.get(':nth-child(2) > :nth-child(1) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content > .ui-search-result__content-wrapper > .ui-search-item__group--title > .ui-search-item__title').then(($text)=>{
                const productName = $text.text();
                cy.get(':nth-child(2) > :nth-child(1) > .ui-search-result__wrapper > .andes-card > .ui-search-result__image > .ui-search-link > .carousel-container > .slick-initialized > .slick-list > .slick-track > .slick-active > .ui-search-result-image__element').click();                
                cy.get('.ui-pdp-title').contains(productName);                
            });            
        });

        it.only('Categories selection',function(){
            cy.visit('https://www.mercadolibre.com.ec/');
            cy.get('a[href*="animales-y-mascotas"]')
            .should('have.attr', 'href').then((href) => {
                cy.log(href);
                cy.visit(href)
            });
            cy.get('.categories > :nth-child(2) > :nth-child(1) > ul > :nth-child(2) > a').click();
            cy.get('[data-testid=Minimum-price]').type('30');
            cy.get('[data-testid=Maximum-price]').type('60');
            cy.get('.ui-search-price-filter > :nth-child(3)').click();
            cy.get('[aria-label="Ubicación"] > :nth-child(2) > .ui-search-link > .ui-search-filter-name').click();
            cy.get('.ui-search-gallery-desktop').click(); //change products view
        });

        it.only('Help menu items selection',function(){
            cy.visit('https://www.mercadolibre.com.ec/ayuda');
            cy.get('[class="andes-list__item cx-list-item desktop  andes-list__item--height-row-medium andes-list__item-with-image"]').
            each(($item) => {
                if ($item.text().includes('Seguridad')) {
                    console.log($item.text());
                    console.log($item.click());
                }
            });
            cy.visit('https://www.mercadolibre.com.ec/ayuda/Seguridad_663');
            cy.title().should('include', 'Seguridad');
            cy.visit('https://www.mercadolibre.com.ec/ayuda/robaron-mi-celular-tenia-app-mercado-pago_15349');
            cy.title().should('include', '¿Qué hago si pierdo o roban mi celular?');
            cy.get('.andes-form-control__field').type('cuenta {enter}');
        });
    });
});