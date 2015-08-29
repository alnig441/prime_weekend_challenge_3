/**
 * Created by allannielsen on 8/28/15.
 */

var incr = 0;

function getTeamMember(){

    console.log('in getTeamMember printing out the incrementor ', incr);


    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/deltaCohort/"+incr

    }).done(function(data){
        console.log('AJAX call succeeded with ',data);
        var $h1 = $('<h1>');
        $h1.text(data.name);
        var $p1 = $('<p>');
        $p1.text(data.shoutOut);
        $('.deltaTeam').html([$h1, $p1]);


    }).fail(function(jqXHR, textStatus, errorThrown){
        console.log('AJAX call to deltaCohor.json failed with error message: ',errorThrown);

    }).always(function(){

    });

    if(incr==16){
        incr=0;
    }
    else{
        incr++;

    }
}