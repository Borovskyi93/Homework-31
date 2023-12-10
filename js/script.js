const nodesButton = {
    tag: document.querySelector('.buttons_container'),
}

nodesButton.tag.addEventListener('click', followLink);



function followLink (event) {
    const btnInputRef = event.currentTarget.querySelector('.button_input');
    const btnConfirmtRef = event.currentTarget.querySelector('.button_confirm');
    let tempRef;

    if (btnInputRef === event.target) {
        tempRef = getLinkRef();
        btnConfirmtRef.addEventListener('click', () => {
            window.location.href = tempRef;
        });
    }
}

function checkProtocolInclude (userInput) {
    let tempStringProtocol = '';

    for (let i = 0; i < 4; i++) {
        tempStringProtocol += userInput[i];
    }

    if (tempStringProtocol !== 'http' && tempStringProtocol !== 'https') {
        userInput = 'https://' + userInput;
    }
    return userInput;
}

function getLinkRef () {
    const userWebSiteInput = prompt('Enter you WebSite:');
    let tempLink;

    if (userWebSiteInput) {
        tempLink = checkProtocolInclude(userWebSiteInput);    
    } else {
        alert('Wrong DATA!!!');
    }
    return tempLink;
}
