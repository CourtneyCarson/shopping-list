function main() {

    // make page not reload when submit happens
    
    $('#js-shopping-list-form').submit(function (evt) {
        evt.preventDefault();
        // check value of item      
        let valueItem = $('#shopping-list-entry').val();
        console.log(valueItem);
        // template item to make a new button/list

        let template = `<li>
        <span class="shopping-item">${valueItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
        $(".shopping-list").append(template);
 
    })
}
    // function to check items in teh shopping list
$(".shopping-list").on("click", ".shopping-item-toggle", function (evt) {
    let title = $(this).parent().siblings();
    title.toggleClass('shopping-item__checked');
    console.log(title);
     
})    
    //delete
    $(".shopping-list").on("click", ".shopping-item-delete", function (evt) {
        let listItem= $(this).closest("li");
        listItem.remove();

});

$(main);