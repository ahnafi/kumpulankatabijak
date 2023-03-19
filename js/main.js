$(".nav-link").on("click" , function(){
    $(".nav-link").removeClass("active");
    $(this).addClass('active');
})
function jokes(){
    $.ajax({
        url:'https://candaan-api.vercel.app/api/text/random',
        type : 'GET',
        datatype:'json',
        data:{
    
        },
        success : function(e){
            $('#TampilData').html(e.data)
            alert(e.data);
        }
    })
}
function animekataBijak (param){
    // ide,masukan parameter dari btn terus ubah /api/getrandom dari parameter
    $.getJSON('https://katanime.vercel.app/api/'+param+'',function(i){
        if (param == "getrandom"){
            let data = i['result'];
            data.forEach(e => {
             $('#TampilData').append(`
                <p>${e['indo']}</p>
                <p>${e['anime']}</p>
                <hr>
                `)
            });
        } else if (param == "getlistanime"){
            console.log(i)
        }
    })
}
// animekataBijak('getrandom')
// animekataBijak('getlistanime')




$('#btnJokes').on('click',function(){
    jokes();
})
$('#btnanime').on('click',function(){
    
})