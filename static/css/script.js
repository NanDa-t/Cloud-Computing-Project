$( document ).ready(function() {

    
    $('.stt-button').on('click',function(){
        if($('.stt-button').hasClass('active-button')){
            
        }else{
            $('.stt-button').addClass('active-button');
            $('.tts-button').removeClass('active-button');
            $('.db-button').removeClass('active-button');
            $('.show-sst').addClass('active')
            $('.show-tts').removeClass('active')
            $('.show-db').removeClass('active')
        }
    })
    $('.tts-button').on('click',function(){
        if($('.tts-button').hasClass('active-button')){

        }else{
            $('.tts-button').addClass('active-button');
            $('.stt-button').removeClass('active-button');
            $('.db-button').removeClass('active-button');
            $('.show-sst').removeClass('active')
            $('.show-tts').addClass('active')
            $('.show-db').removeClass('active')
        }
    })
    $('.db-button').on('click',function(){
        if($('.db-button').hasClass('active-button')){

        }else{
            $('.db-button').addClass('active-button');
            $('.stt-button').removeClass('active-button');
            $('.tts-button').removeClass('active-button');
            $('.show-db').addClass('active');
            $('.show-sst').removeClass('active')
            $('.show-tts').removeClass('active')
        }
    })


});