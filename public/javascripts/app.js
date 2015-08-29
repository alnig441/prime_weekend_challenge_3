/**
 * Created by allannielsen on 8/28/15.
 */

function getTeamMember(){

    var source = $('#deltaTeam-template').html();
    var template = Handlebars.compile(source);

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/deltaCohort"

    }).done(function(data){
        console.log('AJAX call succeeded with ',data);

    }).fail(function(jqXHR, textStatus, errorThrown){
        console.log('AJAX call to deltaCohor.json failed with error message: ',errorThrown);

    }).always(function(){

    })
}