$(document).ready(function(){

    setInterval(getTeamMember, 5000);
        //getTeamMember();

    $(document).on('click', function(){
        console.log('click handler called');
        $('#toggle').toggle('puff');
    })

});