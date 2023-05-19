$(document).ready( function() {
    $("form").submit( function() {
        var name = $(this).find('#first-name').val();
        var size = $(this).find('#size').val().toUpperCase();
        var activities = [];

        $(':checkbox:checked').each(function(i){
            activities[i] = $("label[for='" + $(this).attr('id') + "']").text();
        });

        activities = activities.join(', ');

        var form_results = '<div class="result_div"><h3>Result</h3><br><div class="form-group"><label>Name: </label><span>'+name+'</span></div><div class="form-group"><label>Size: </label><span>'+size+'</span></div><div class="form-group"><label>Activities: </label><span>'+activities+'</span></div></div>';

        $('form').after(form_results);

        $('form').css({"color":"#fff", "background-color":"blue", "padding": "40px"});
        return false;
    })
});