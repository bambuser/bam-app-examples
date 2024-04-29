const appContext = await bambuserAppFramework.getContext();

console.log('CUSTOM SCREENS APP: PRE SCREEN', appContext);
const { screen } = appContext;

// 1. Show screen directly
screen.setReady();

// 2. Setup click handlers to allow user to move futher
const acceptTermsCheckbox = document.querySelector('input[name="accept-terms"]')
const loginButton = document.querySelector('#continue');

acceptTermsCheckbox.addEventListener('change', () => {
  loginButton.disabled = !acceptTermsCheckbox.checked;
});
loginButton.addEventListener('click', () => {
  screen.close({ action: 'next' });
});

// 3. Setup communication with main app context
screen.on('message', payload => {
  console.log('CUSTOM SCREENS APP: PRE SCREEN received message', payload);
});

// 4. Demo, demo, demo, post message to main app context
window.setTimeout(() => {
  console.log('CUSTOM SCREENS APP: PRE SCREEN time to send a demo message to main app context!');
  screen.postMessage({
    eventType: 'hello',
    data: {
      time: `${new Date()}`,
    },
  });
}, 5000);
