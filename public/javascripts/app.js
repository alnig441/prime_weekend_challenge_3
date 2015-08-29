/**
 * Created by allannielsen on 8/28/15.
 */

var incr = 0;

function getTeamMember(){

    console.log('in getTeamMember printing out the incrementor ', incr);
    var source = $('#deltaTeam-template').html();
    var template = Handlebars.compile(source);

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/deltaCohort/"+incr

    }).done(function(data){
        console.log('AJAX call succeeded with ',data);
        $('.deltaTeam').append(template(data));


    }).fail(function(jqXHR, textStatus, errorThrown){
        console.log('AJAX call to deltaCohor.json failed with error message: ',errorThrown);

    }).always(function(){

    });

    if(incr==16){
        incr=0;
    }else{
        incr++;
        //console.log(incr);
    }
}