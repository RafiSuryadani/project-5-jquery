$(document).ready(function(){

    // ONclick at tag
    // $('p').click(function(){
    //     $(this).hide()
    // })

    // onclick at class (.)
    // onclick at id (#)
    $('.textClass').click(function(){
        $(this).hide()
    })

    //onclick show other element
    $("#show").click(function(){
        $('#hiddenElement').show()
    })

    $("#hide").click(function(){
        $('#hiddenElement').hide()
    })


    //double click show other element
    $("#showDbl").dblclick(function(){
        $('#hiddenDblElement').show()
    })

    //toggle
    $('#btnToggle').click(function(){
        $('#contentToggle').toggle()
        if($(this).text() == 'Show'){
            $(this).text('Hide')
        }else{
            $(this).text('Show')
        }
    })

    $('#name').blur(function(){
        //$('.alertNmae').show()

        if($(this).val() == ''){
            $('.alertName').show()
        }else{
            $('.alertName').hide()
        }
    })

    $('#email').blur(function(){
        //$('.alertNmae').show()

        if($(this).val() == ''){
            $('.alertEmail').show()
        }else{
            $('.alertEmail').hide()
        }
    })
    
    $('#company').change(function(){
        $('.alertCompany').show()
    })

    $('.btnOn').click(function(){
        $('li').addClass('active')
    })
    $('.btnOff').click(function(){
        $('li').removeClass('active')
    })

    $('.box').mouseover(function(){
        $(this).animate({
            marginLeft: '300px',
            width: '100px'
        },500).css({
            'background-color': 'green'
        })
    })

    $('.box').mouseout(function(){
        $(this).animate({
            marginLeft: '0px',
            width: '200px'
        },500).css({
            'background-color': 'red'
        })
    })


//product tab
    $('.product-item').hide()
    $('.product-item:first').show()

    $('.product-color div a:not(:first)').addClass('inactive')

    $('.product-color div a').on('click', function(){
        const n = $(this).attr('id')
        if($(this).hasClass('inavtive')){
            $('.product-color div a').addClass('inactive')
            $(this).removeClass('inactive')
        }
        console.log(n)

        $('.product-item').hide()
        $('#' + n + 'image').show()

    })
})


