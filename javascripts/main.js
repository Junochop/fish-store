// Filter fish that are "on sale"
const filterFish = () => {
  $('#availble .fish').not('.on-sale').toggle();
}

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === "Show Sale Fish") {
      returnText = "Show All";
    } else {
      returnText = "Show Sale";
    }
    return returnText;
  });
}

$('#show-sale').click(() => {
  changeButtonText();
  filterFish();
});


// Add fish to "Basket"
const moveToCart = (e) => {
  let fishCard = $(e.target).closest('.fish');
  $('#snagged').append(fishCard);

}

$('button.add').click(moveToCart);