document.getElementById('submitBtn').addEventListener('click', () => {
  submitBtnClicked();
});

chrome.storage.local.get(["user-credenrial-saved-in-local-8855997766441589"], (result) => {
  const userObject = result["user-credenrial-saved-in-local-8855997766441589"] || [];
  if (Object.keys(userObject).length > 0) {
    dataSaved();
  }
});

function submitBtnClicked()  {
  const message = {
    action: "setCredentialForWifiLogin549863215478963632154",
    userid7: document.getElementById('userid').value,
    password05: document.getElementById('password').value
  }
  chrome.runtime.sendMessage(message, function() {
    if (!chrome.runtime.lastError) {
      dataSaved();
    } else {
      console.log(chrome.runtime.lastError, "Error at line 22");
    }
  });
}

function dataSaved() {
  document.getElementById('user-credential').innerHTML = `
  <div class="container-for-img">
    <img class="form-submitted-img-class" src="form_submitted.svg">
  </div>
  <div class="container-for-text" id = "container-for-text">
    <div class="container-for-submitted-text">
      <p>Your credentials are saved</p>
    </div>
  </div>`;
  const editBtn = document.createElement('div');
  editBtn.id = 'editText';
  editBtn.classList.add('edit-text');
  editBtn.innerText = 'Edit';
  editBtn.addEventListener('click', () => {
    document.getElementById('user-credential').innerHTML = `
    <input type="text" id="userid" name="userid" placeholder="User Id">
    <input type="password" id="password" name="password" placeholder="Password">`;

    const submitBtn = document.createElement('div');
    submitBtn.id = 'submitBtn';
    submitBtn.classList.add('submit-btn');
    submitBtn.innerText = 'Submit';
    submitBtn.addEventListener('click', () => {
      submitBtnClicked();
    });
    document.getElementById('user-credential').appendChild(submitBtn);
  });
  document.getElementById('container-for-text').appendChild(editBtn);
}
