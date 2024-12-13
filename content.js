chrome.runtime.sendMessage({ action: 'getCredentialForWifiLogin888445684' });
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getCredentialForWifiLofinResponse562797410578671') {
        const userid = message.userid;
        const password = message.password;
        checkAvail(userid, password);
    }
});

function checkAvail(userid, password) {
    //console.log("continueng with userid and passwowd: ", userid, " ", password);
    setTimeout(() => {
        var u = document.getElementById("LoginUserPassword_auth_username");
        var p = document.getElementById("LoginUserPassword_auth_password");
        if (!u && !p) {
            return;
        }
        u.value = userid;
        u.dispatchEvent(new Event('change'));
        p.value = password;
        u.dispatchEvent(new Event('change'));
        tryAgain();
    }, 500);
}

var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

function tryAgain() {
    if(document.getElementById('UserCheck_Login_Button')) {
        document.getElementById('UserCheck_Login_Button').dispatchEvent(clickEvent);
        setTimeout(() => {
            tryAgain();
        }, 200);
    }
}