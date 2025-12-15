const locationInfo = window.location;
console.log(locationInfo);
const urlParams = new URLSearchParams(locationInfo.search);
console.log(urlParams.has('page'));
let currentView = '';

const allViews = document.querySelectorAll('.view');
console.log(allViews);

allViews.forEach((view) => {
  if (urlParams.size > 0) {
    if (urlParams.has('page')) {
      currentView = urlParams.get('page');
      const viewId = view.id;
      console.log(viewId);
      if (currentView == viewId) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    }
  }
});
