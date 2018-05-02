const loadFishes = (susccessFunction, errorFunction) => {
  $.get('../db/fishes.json')
    .done(susccessFunction)
    .fail(errorFunction);
};

module.exports = loadFishes;
