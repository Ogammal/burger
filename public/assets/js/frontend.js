$(function() {
    $(".devBtn").on("click", function() {
        burgerId = $(this).data('id');
        console.log("this is the burger ID: " + burgerId);
        update(burgerId)
    })
    
    function update(id) {
        console.log("/api/" + id)
        $.ajax("/api/" + id, {
            type: "PUT"
        }).then(
            function() {
                console.log("devouring burger!");
                location.reload();
            }
        )
    } 
})