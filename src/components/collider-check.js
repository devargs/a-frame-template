AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      console.log('Player hit something!');
    });
  },

  update: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      const dialog = document.querySelector('#dialog');
      console.log('Open dialog');
      console.log(dialog);
      dialog.click();
      dialog.emit('click');
    });
  },
});
