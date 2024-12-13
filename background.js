chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === 'getCredentialForWifiLogin888445684') {
    chrome.storage.local.get(["user-credenrial-saved-in-local-8855997766441589"], (result) => {
      const userObject = result["user-credenrial-saved-in-local-8855997766441589"] || [];
      if (Object.keys(userObject).length > 0) {
        let userid = userObject[0].userid;
        let password = userObject[0].password;
        sendResponseToActiveTab(userid, password);
      }
    });
  } else if (message.action === "setCredentialForWifiLogin549863215478963632154") {
    saveUserCredential(message.userid7, message.password05);
    sendResponse();
  }
});

function sendResponseToActiveTab(userid, password) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) {
        console.error("No active tab found.");
        return;
    }
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "getCredentialForWifiLofinResponse562797410578671", userid: userid, password: password })
  });
}

function saveUserCredential(userid, password) {
  const userObj = {
    userid: userid,
    password: password
  }
  const totalCredential = [];
  totalCredential.push(userObj);
  chrome.storage.local.set({ ["user-credenrial-saved-in-local-8855997766441589"]: totalCredential }, () => {
    //console.log("user credential is saved with user: ", userObj);
  });
}