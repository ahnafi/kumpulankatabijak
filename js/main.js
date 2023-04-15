$(".nav-link").on("click" , function(){
    $(".nav-link").removeClass("active");
    $(this).addClass('active');
})
function jokes(){
    $.ajax({
        url:'https://candaan-api.vercel.app/api/text/random',
        type : 'GET',
        datatype:'json',
        data:{},
        success : function(e){
            $('#TampilData').html(e.data)
            alert(e.data);
        }
    })
}
function animekataBijak (param){
    // ide,masukan parameter dari btn terus ubah /api/getrandom dari parameter
    $('#TampilData').html('LOADINGG!!!!');
    //    kondisi pertama
    if (param == "getrandom"){
    $.getJSON('https://katanime.vercel.app/api/'+param+'',(i)=>{
            let data = i['result'];
            // $('#TampilData').html('');
            // data.forEach(e => {
            //     let anim = e['anime']
            //     let ind = e['indo']
            //     let char = e['character']
            //     let eng = e['english']
            //     $('#TampilData').append(`
            //     <p>
            //     <em
            //     >"${ind}"</em
            //     >
            //     </p>
            //     <p class="fw-semibold text-center">~${char} - ${anim}~</p>
            //     <hr>
            //     `)
            // });
            let rand = data[Math.floor(Math.random() * data.length)]
            // tampilkan
            $('#TampilData').html(`
            <p class="text-center">
                <em
                >"${rand.indo}"</em
                >
                </p>
                <p class="blockquote-footer text-center">${rand.character} - ${rand.anime}~</p>

            `);
        })
        // kondisi kedua
    } else if (param == "getbyanime?anime=naruto&page="){
        let num = Math.floor(Math.random() * 34) + 1;
        $.getJSON(`https://katanime.vercel.app/api/${param}${num}`,(i) => {
            let data = i['result'];
            let rand = data[Math.floor(Math.random() * data.length)]
            // tampilkan
            $('#TampilData').html(`
            <p class="text-center">
                <em
                >"${rand.indo}"</em
                >
                </p>
                <p class="blockquote-footer text-center">${rand.character} ~</p>

            `);
        })
    } else if (param == "getbyanime?anime=one%20piece&page="){
        let num = Math.floor(Math.random() * 12) + 1;
        $.getJSON(`https://katanime.vercel.app/api/${param}${num}`,(i) => {
            let data = i['result'];
            let rand = data[Math.floor(Math.random() * data.length)]
            // tampilkan
            $('#TampilData').html(`
            <p class="text-center">
                <em
                >"${rand.indo}"</em
                >
                </p>
                <p class="blockquote-footer text-center">${rand.character} ~</p>

            `);
            
        })
    }
}
// animekataBijak('getlistanime')
$('#btnJokes').on('click',function(){
    jokes();
})
$('#btnanime').on('click',function(){
    animekataBijak('getrandom');
})
$('#btnAnimeNaruto').on('click',function(){
    // 1-34
     animekataBijak(`getbyanime?anime=naruto&page=`);
})
$('#btnAnimeOnePiece').on('click',function(){
    // 1-34
     animekataBijak(`getbyanime?anime=one%20piece&page=`);
})
// api.ibeng.tech/docs
function apiIbeng(param){
    $('#TampilData').html('LOADINGG!!!!');
    $.getJSON(`https://api.ibeng.tech/api/random/${param}`,(i)=>{
        
        if (param == 'fakta?apikey=tamvan' || param == "katabijak?apikey=tamvan"){
            let data = i.result
            $('#TampilData').html(`
                <p class="text-center">
                    <em
                    >"${data}"</em
                    >
                    </p>
                `);
            } else if (param == 'quotes?apikey=tamvan' ){
            let data = i.result
            $('#TampilData').html(`
            <p class="text-center">
            <em
            >"${data.quotes}"</em
            >
            </p>
            <p class="blockquote-footer text-center">${data.author} ~</p>
        `);
        }

    })
}

$('#btnFakta').on('click',function(){
    apiIbeng('fakta?apikey=tamvan')
})
$('#btnQuotes').on('click',function(){
    apiIbeng('quotes?apikey=tamvan')
})
$('#btnKataBijak').on('click',function(){
    apiIbeng('katabijak?apikey=tamvan')
})
