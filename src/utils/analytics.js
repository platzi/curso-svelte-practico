const analyticsTracking = (eventName) => {
  if (typeof windows !== 'undefined') {
    window.ga('send', 'event', 'social', 'click', eventName, {
      nonInteraction: true
    });
  }
};

export default analyticsTracking;