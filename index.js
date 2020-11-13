$(function() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('div').siblings('span').toggleClass('shopping-item__checked');
    });
    
    $('.shopping-list').on('click','.shopping-item-delete', function(event) {
        var itemForRemoval = $(this).closest('li');
        $(itemForRemoval).remove();
    });

    $('#js-shopping-list-form').submit(function(event) {
         event.preventDefault()
            var newItem = $("#shopping-list-entry").val();
        $("ul.shopping-list").append(`<li> 
            <span class="shopping-item"> ${newItem} </span> 
            <div class="shopping-item-controls">
             <button class="shopping-item-toggle"> 
                <span class="button-label">check</span> 
            </button> 
            <button class="shopping-item-delete">
             <span class="button-label">delete</span> 
            </button> </div>
            </li>`);
            $("#shopping-list-entry").val('');
    });

});
 