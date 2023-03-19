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
    $('#TampilData').html('');
    $.getJSON('https://katanime.vercel.app/api/'+param+'',function(i){
    //    kondisi pertama
    if (param == "getrandom"){
            let data = i['result'];
            data.forEach(e => {
                let anim = e['anime']
                let ind = e['indo']
                let char = e['character']
                let eng = e['english']
             $('#TampilData').append(`
             <p>
             <em
               >"${eng}"</em
             >
             <br><br>
             <em
               >"${ind}"</em
             >
           </p>
           <p class="fw-semibold text">${char} - ${anim}</p>
           <hr>
                `)
            });
            // 
        } else if (param == "getlistanime"){
            console.log(i)
        }
    })
}
// animekataBijak('getlistanime')


$('#btnJokes').on('click',function(){
    jokes();
})
$('#btnanime').on('click',function(){
    animekataBijak('getrandom');
})
$('#btnAnimeOnePiece').on('click',function(){
    // animekataBijak('getbyanime?anime=naruto&page=1');
    alert('fitur masih dikembangkan')
})