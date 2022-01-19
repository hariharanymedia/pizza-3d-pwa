/**********************************************************
 * @name: Initialization
 * @desc: a-scene & pizzabase
 ***********************************************************/
var sceneEl = document.querySelector('a-scene');
let pizzaBase = sceneEl.querySelector('a-gltf-model');
let toppingsList = [];

/**********************************************************
 * @name: addOrRemoveFromToppings
 * @desc: Maintian list of toppings
 ***********************************************************/
const addOrRemoveFromToppings = (topping) => {
    const exists = toppingsList.includes(topping);

    if (exists)
        toppingsList = toppingsList.filter((c) => {
            return c !== topping;
        });
    else toppingsList.push(topping);
};

/**********************************************************
 * @name: corn
 * @desc: In order to have complete access of every a-frame tag using DOM, corn component is registered.
 ***********************************************************/
AFRAME.registerComponent('corn', {
    // Fired on initialization
    init: function() {
        let pizzaBase = document.querySelector('a-gltf-model');
        // console.log is not logging pizzaBase

        let corntopping = document.createElement('a-entity');
        corntopping.className = 'corntopping';

        pizzaBase.appendChild(corntopping);

        let cornEl_0 = document.createElement('a-gltf-model');
        cornEl_0.setAttribute('src', '#corn');
        cornEl_0.setAttribute('position', { x: 0, y: 1, z: 0 });
        cornEl_0.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        cornEl_0.setAttribute(
            'animation',
            'property: position; to: 0 0.1 0; dur: 1200'
        );

        let cornEl_1 = document.createElement('a-gltf-model');
        cornEl_1.setAttribute('src', '#corn');
        cornEl_1.setAttribute('position', { x: 0.7, y: 1, z: 0 });
        cornEl_1.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        cornEl_1.setAttribute(
            'animation',
            'property: position; to: 0.7 0.1 0; dur: 1200'
        );

        let cornEl_2 = document.createElement('a-gltf-model');
        cornEl_2.setAttribute('src', '#corn');
        cornEl_2.setAttribute('position', { x: -0.7, y: 1, z: 0 });
        cornEl_2.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        cornEl_2.setAttribute(
            'animation',
            'property: position; to: -0.7 0.1 0; dur: 1200'
        );

        let cornEl_3 = document.createElement('a-gltf-model');
        cornEl_3.setAttribute('src', '#corn');
        cornEl_3.setAttribute('position', { x: 0, y: 1, z: -0.7 });
        cornEl_3.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        cornEl_3.setAttribute(
            'animation',
            'property: position; to: 0 0.1 -0.7; dur: 1200'
        );

        let cornEl_4 = document.createElement('a-gltf-model');
        cornEl_4.setAttribute('src', '#corn');
        cornEl_4.setAttribute('position', { x: 0, y: 1, z: 0.7 });
        cornEl_4.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        cornEl_4.setAttribute(
            'animation',
            'property: position; to: 0 0.1 0.7; dur: 1200'
        );

        corntopping.append(cornEl_0, cornEl_1, cornEl_2, cornEl_3, cornEl_4);
    },

    remove: function() {
        console.log('removing topping');
        const corntopping = document.querySelector('.corntopping');
        pizzaBase.removeChild(corntopping);
    },
});

AFRAME.registerComponent('bellPepper', {
    // Fired on initialization
    init: function() {
        console.log('bellPepper');
        let pizzaBase = document.querySelector('a-gltf-model');
        // console.log is not logging pizzaBase

        let bellPeppertopping = document.createElement('a-entity');
        bellPeppertopping.className = 'bellPeppertopping';

        pizzaBase.appendChild(bellPeppertopping);

        let bellPepperEl_0 = document.createElement('a-gltf-model');
        bellPepperEl_0.setAttribute('src', '#greenBellPepper');
        bellPepperEl_0.setAttribute('position', { x: 0.1, y: 1.3, z: 0 });
        bellPepperEl_0.setAttribute('scale', { x: 0.15, y: 0.15, z: 0.15 });
        bellPepperEl_0.setAttribute(
            'animation',
            'property: position; to: 0.1 0.55 0; dur: 1200'
        );

        let bellPepperEl_1 = document.createElement('a-gltf-model');
        bellPepperEl_1.setAttribute('src', '#yellowBellPepper');
        bellPepperEl_1.setAttribute('position', { x: -0.1, y: 1.3, z: 0.7 });
        bellPepperEl_1.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        bellPepperEl_1.setAttribute(
            'animation',
            'property: position; to: -0.1 0.12 0.7; dur: 1200'
        );

        let bellPepperEl_2 = document.createElement('a-gltf-model');
        bellPepperEl_2.setAttribute('src', '#redBellPepper');
        bellPepperEl_2.setAttribute('position', { x: 0.2, y: 1.3, z: 0.5 });
        bellPepperEl_2.setAttribute('scale', { x: 0.15, y: 0.15, z: 0.15 });
        bellPepperEl_2.setAttribute(
            'animation',
            'property: position; to: 0.2 0.2 0.5; dur: 1200'
        );

        let bellPepperEl_3 = document.createElement('a-gltf-model');
        bellPepperEl_3.setAttribute('src', '#redBellPepper');
        bellPepperEl_3.setAttribute('position', { x: 0, y: 1.3, z: -0.7 });
        bellPepperEl_3.setAttribute('scale', { x: 0.2, y: 0.1, z: 0.1 });
        bellPepperEl_3.setAttribute(
            'animation',
            'property: position; to: 0 0.2 -0.7; dur: 1200'
        );

        let bellPepperEl_4 = document.createElement('a-gltf-model');
        bellPepperEl_4.setAttribute('src', '#yellowBellPepper');
        bellPepperEl_4.setAttribute('position', { x: -0.2, y: 1.3, z: 0.1 });
        bellPepperEl_4.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        bellPepperEl_4.setAttribute(
            'animation',
            'property: position; to: -0.2 0.1 0.1; dur: 1200'
        );

        bellPeppertopping.append(
            bellPepperEl_0,
            bellPepperEl_1,
            bellPepperEl_2,
            bellPepperEl_3,
            bellPepperEl_4
        );
    },

    remove: function() {
        console.log('removing topping');
        const bellPeppertopping = document.querySelector('.bellPeppertopping');
        pizzaBase.removeChild(bellPeppertopping);
    },
});

/**********************************************************
 * @name: tomato
 * @desc: In order to have complete access of every a-frame tag using DOM, corn component is registered.
 ***********************************************************/
AFRAME.registerComponent('tomato', {
    // Fired on initialization
    init: function() {
        let pizzaBase = document.querySelector('a-gltf-model');
        // console.log is not logging pizzaBase

        let tomatotopping = document.createElement('a-entity');
        tomatotopping.className = 'tomatotopping';

        pizzaBase.appendChild(tomatotopping);

        let tomatoEl_0 = document.createElement('a-gltf-model');
        tomatoEl_0.setAttribute('src', '#tomato');
        tomatoEl_0.setAttribute('position', { x: 0, y: 1, z: 0 });
        tomatoEl_0.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        tomatoEl_0.object3D.rotation.x = THREE.Math.degToRad(150);
        tomatoEl_0.setAttribute(
            'animation',
            'property: position; to: 0 0.13 0; dur: 1200'
        );

        let tomatoEl_1 = document.createElement('a-gltf-model');
        tomatoEl_1.setAttribute('src', '#tomato');
        tomatoEl_1.setAttribute('position', { x: 0.5, y: 1, z: 0.4 });
        tomatoEl_1.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        tomatoEl_1.object3D.rotation.x = THREE.Math.degToRad(150);
        tomatoEl_1.setAttribute(
            'animation',
            'property: position; to: 0.5 0.13 0.4; dur: 1200'
        );

        let tomatoEl_2 = document.createElement('a-gltf-model');
        tomatoEl_2.setAttribute('src', '#tomato');
        tomatoEl_2.setAttribute('position', { x: -0.4, y: 1, z: 0.3 });
        tomatoEl_2.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        tomatoEl_2.object3D.rotation.x = THREE.Math.degToRad(150);
        tomatoEl_2.setAttribute(
            'animation',
            'property: position; to: -0.4 0.13 0.3; dur: 1200'
        );

        let tomatoEl_3 = document.createElement('a-gltf-model');
        tomatoEl_3.setAttribute('src', '#tomato');
        tomatoEl_3.setAttribute('position', { x: 0.2, y: 1, z: 0.6 });
        tomatoEl_3.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
        tomatoEl_3.object3D.rotation.x = THREE.Math.degToRad(150);
        tomatoEl_3.setAttribute(
            'animation',
            'property: position; to: 0.2 0.12 0.6; dur: 1200'
        );

        tomatotopping.append(tomatoEl_0, tomatoEl_1, tomatoEl_2, tomatoEl_3);
    },

    remove: function() {
        console.log('removing topping');
        const tomatoTopping = document.querySelector('.tomatotopping');
        pizzaBase.removeChild(tomatoTopping);
    },
});

/**********************************************************
 * @name: onion
 * @desc: In order to have complete access of every a-frame tag using DOM, corn component is registered.
 ***********************************************************/
AFRAME.registerComponent('onion', {
    // Fired on initialization
    init: function() {
        let pizzaBase = document.querySelector('a-gltf-model');
        // console.log is not logging pizzaBase

        let onionTopping = document.createElement('a-entity');
        onionTopping.className = 'onionTopping';

        pizzaBase.appendChild(onionTopping);

        let onionEl_0 = document.createElement('a-gltf-model');
        onionEl_0.setAttribute('src', '#onionRing');
        onionEl_0.setAttribute('position', { x: 0, y: 1, z: -0.5 });
        onionEl_0.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        onionEl_0.setAttribute(
            'animation',
            'property: position; to: 0 0.13 -0.5; dur: 1200'
        );

        let onionEl_1 = document.createElement('a-gltf-model');
        onionEl_1.setAttribute('src', '#onionRing');
        onionEl_1.setAttribute('position', { x: 0, y: 1, z: 0.5 });
        onionEl_1.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        onionEl_1.setAttribute(
            'animation',
            'property: position; to: 0 0.13 0.5; dur: 1200'
        );

        let onionEl_2 = document.createElement('a-gltf-model');
        onionEl_2.setAttribute('src', '#onionRing');
        onionEl_2.setAttribute('position', { x: -0.7, y: 1, z: 0.3 });
        onionEl_2.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        onionEl_2.setAttribute(
            'animation',
            'property: position; to: -0.7 0.13 0.3; dur: 1200'
        );

        let onionEl_3 = document.createElement('a-gltf-model');
        onionEl_3.setAttribute('src', '#onionRing');
        onionEl_3.setAttribute('position', { x: -0.6, y: 1, z: -0.1 });
        onionEl_3.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        onionEl_3.setAttribute(
            'animation',
            'property: position; to: -0.6 0.12 -0.1; dur: 1200'
        );

        let onionEl_4 = document.createElement('a-gltf-model');
        onionEl_4.setAttribute('src', '#onionRing');
        onionEl_4.setAttribute('position', { x: 0.4, y: 1, z: 0.4 });
        onionEl_4.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        onionEl_4.setAttribute(
            'animation',
            'property: position; to: 0.4 0.12 0.4; dur: 1200'
        );

        onionTopping.append(onionEl_0, onionEl_1, onionEl_2, onionEl_3, onionEl_4);
    },

    remove: function() {
        console.log('removing topping');
        const onionTopping = document.querySelector('.onionTopping');
        pizzaBase.removeChild(onionTopping);
    },
});

/**********************************************************
 * @name: tofu
 * @desc: In order to have complete access of every a-frame tag using DOM, corn component is registered.
 ***********************************************************/
AFRAME.registerComponent('tofu', {
    // Fired on initialization
    init: function() {
        let pizzaBase = document.querySelector('a-gltf-model');
        // console.log is not logging pizzaBase

        let tofuTopping = document.createElement('a-entity');
        tofuTopping.className = 'tofuTopping';

        pizzaBase.appendChild(tofuTopping);

        let tofuEl_0 = document.createElement('a-gltf-model');
        tofuEl_0.setAttribute('src', '#texturedTofu');
        tofuEl_0.setAttribute('position', { x: 0.6, y: 1, z: -0.2 });
        tofuEl_0.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        tofuEl_0.setAttribute(
            'animation',
            'property: position; to: 0.6 0.12 -0.2; dur: 1200'
        );

        let tofuEl_1 = document.createElement('a-gltf-model');
        tofuEl_1.setAttribute('src', '#texturedTofu');
        tofuEl_1.setAttribute('position', { x: 0.6, y: 1, z: -0.6 });
        tofuEl_1.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        tofuEl_1.setAttribute(
            'animation',
            'property: position; to: 0.6 0.12 -0.6; dur: 1200'
        );

        let tofuEl_2 = document.createElement('a-gltf-model');
        tofuEl_2.setAttribute('src', '#texturedTofu');
        tofuEl_2.setAttribute('position', { x: -0.7, y: 1, z: 0.45 });
        tofuEl_2.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        tofuEl_2.setAttribute(
            'animation',
            'property: position; to: -0.7 0.13 0.45; dur: 1200'
        );

        let tofuEl_3 = document.createElement('a-gltf-model');
        tofuEl_3.setAttribute('src', '#texturedTofu');
        tofuEl_3.setAttribute('position', { x: -0.6, y: 1, z: -0.1 });
        tofuEl_3.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        tofuEl_3.setAttribute(
            'animation',
            'property: position; to: -0.6 0.12 -0.1; dur: 1200'
        );

        let tofuEl_4 = document.createElement('a-gltf-model');
        tofuEl_4.setAttribute('src', '#texturedTofu');
        tofuEl_4.setAttribute('position', { x: 0.4, y: 1, z: 0.4 });
        tofuEl_4.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        tofuEl_4.setAttribute(
            'animation',
            'property: position; to: 0.4 0.12 0.4; dur: 1200'
        );

        let tofuEl_5 = document.createElement('a-gltf-model');
        tofuEl_5.setAttribute('src', '#texturedTofu');
        tofuEl_5.setAttribute('position', { x: 0.2, y: 1, z: 0.2 });
        tofuEl_5.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        tofuEl_5.setAttribute(
            'animation',
            'property: position; to: 0.2 0.12 0.2; dur: 1200'
        );

        let tofuEl_6 = document.createElement('a-gltf-model');
        tofuEl_6.setAttribute('src', '#texturedTofu');
        tofuEl_6.setAttribute('position', { x: -0.35, y: 1, z: -0.4 });
        tofuEl_6.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        tofuEl_6.setAttribute(
            'animation',
            'property: position; to: -0.35 0.12 -0.4; dur: 1200'
        );

        let tofuEl_7 = document.createElement('a-gltf-model');
        tofuEl_7.setAttribute('src', '#texturedTofu');
        tofuEl_7.setAttribute('position', { x: -0.2, y: 1, z: 0.5 });
        tofuEl_7.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.1 });
        tofuEl_7.setAttribute(
            'animation',
            'property: position; to: -0.2 0.12 0.5; dur: 1200'
        );

        tofuTopping.append(
            tofuEl_0,
            tofuEl_1,
            tofuEl_2,
            tofuEl_3,
            tofuEl_4,
            tofuEl_5,
            tofuEl_6,
            tofuEl_7
        );
    },

    remove: function() {
        console.log('removing topping');
        const tofuTopping = document.querySelector('.tofuTopping');
        pizzaBase.removeChild(tofuTopping);
    },
});

/***********************************************************
 * @name: addTopping
 * @desc: Add topping to the pizza
 ***********************************************************/
const addTopping = (e) => {
    const isInput = e.target.getAttribute('type');
    if (isInput) {
        const isSelected = e.target.checked;
        const selectedTopping = e.target.getAttribute('name');

        console.log('Topping selected is =>', selectedTopping, isSelected, isInput);
        /**Add your function below */
        switch (selectedTopping) {
            case 'tomato':
                console.log('tomato');
                if (isSelected) {
                    // add tomato toppings
                    pizzaBase.setAttribute('tomato', '');
                    addOrRemoveFromToppings('tomato');
                } else {
                    // remove tomato toppings
                    pizzaBase.removeAttribute('tomato');
                    addOrRemoveFromToppings('tomato');
                }
                break;
            case 'tofu':
                console.log('tofu');
                if (isSelected) {
                    // add tofu toppings
                    pizzaBase.setAttribute('tofu', '');
                    addOrRemoveFromToppings('tofu');
                } else {
                    // remove tofu toppings
                    pizzaBase.removeAttribute('tofu');
                    addOrRemoveFromToppings('tofu');
                }
                break;
            case 'corn':
                console.log('corn');
                if (isSelected) {
                    // add corn toppings
                    pizzaBase.setAttribute('corn', '');
                    addOrRemoveFromToppings('corn');
                } else {
                    // remove corn toppings
                    pizzaBase.removeAttribute('corn');
                    addOrRemoveFromToppings('corn');
                }
                break;
            case 'bellPepper':
                console.log('bellPepper');
                if (isSelected) {
                    // add bellPepper toppings
                    pizzaBase.setAttribute('bellPepper', '');
                    addOrRemoveFromToppings('bellPepper');
                } else {
                    // remove bellPepper toppings
                    pizzaBase.removeAttribute('bellPepper');
                    addOrRemoveFromToppings('bellPepper');
                }
                break;
            case 'onion':
                console.log('onion');
                if (isSelected) {
                    // add onion toppings
                    pizzaBase.setAttribute('onion', '');
                    addOrRemoveFromToppings('onion');
                } else {
                    // remove onion toppings
                    pizzaBase.removeAttribute('onion');
                    addOrRemoveFromToppings('onion');
                }
                break;
        }
    }
};

/*********************************************************
 * @name: init
 * @desc: fired on initialization
 *********************************************************/

(() => {
    if ("serviceWorker" in navigator) {
     
          navigator.serviceWorker
            .register("./serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    }
    const pizzaToppingUL = document.querySelector('#pizza-toppings-list');
    pizzaToppingUL.addEventListener('click', addTopping);
})();

/*****************************************************
 * Modal Code
 *****************************************************/

var modal = document.getElementById('myModal');

const getSummaryText = () => {
    if (toppingsList.length === 1) {
        return (
            'Your pizza with ' + toppingsList[0] + ' toppings will be deliverd soon!'
        );
    } else if (toppingsList.length > 1) {
        let displayText = 'Your pizza with ';
        for (let i = 0; i < toppingsList.length; i++) {
            i != toppingsList.length - 1 ?
                (displayText += ' ' + toppingsList[i] + ', ') :
                (displayText += ' & ' + toppingsList[i]);
        }
        displayText += ' toppings will be delivered soon';
        return displayText;
    } else {
        return 'Please select a topping for your pizza!!';
    }
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];
var para = document.getElementsByName('summaryText')[0];

// When the user clicks the button, open the modal
const orderPizza = function() {
    modal.style.display = 'block';
    para.innerText = getSummaryText();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};