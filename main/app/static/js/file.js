'use strict';
let carts = document.querySelectorAll('.two_ul_item');

for (let cart of carts) {
    cart.addEventListener('mouseover', event => {
        let svg = cart.querySelector('.two_ul_item_Blockmg_svg');
        let text = cart.querySelector('.two_ul_item_Text');
        svg.style.fill = '#FFFFFF';
        text.style.color = '#FFFFFF';
        cart.style.background = '#38BCEA';
        for (let path of cart.getElementsByTagName('path')) {
            path.style.fill = '#FFFFFF';
        }
        cart.querySelector('.two_ul_item_BlockHover').style.display='flex'
    });

    cart.addEventListener('mouseout', event => {
        let svg = cart.querySelector('.two_ul_item_Blockmg_svg');
        let text = cart.querySelector('.two_ul_item_Text');
        svg.style.fill = '#38BCEA';
        text.style.color = '#454545';
        cart.style.background = '#FBFBFB';
        for (let path of cart.getElementsByTagName('path')) {
            path.style.fill = '#38BCEA';
        }
        cart.querySelector('.two_ul_item_BlockHover').style.display='none'
    
    })

    
};





