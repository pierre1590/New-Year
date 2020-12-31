 $(document).ready(function(){
                    $(".btn_music .fa-play-circle").on('click', function(){
                        $(this).hide();
                        $('.fa-pause-circle').fadeIn();
                        $('#myMusic')[0].play();
                        $("#container").fireworks({
                            sound:true, // sound effects
                            opacity:0.55,
                            width: '90%',
                            height: '10%'
                        }).play();   
                        
                    });

                    $(".btn_music .fa-pause-circle").on('click', function(){
                        $(this).hide();
                        $('.fa-play-circle').fadeIn();
                        $('#myMusic')[0].pause();
                    });
});