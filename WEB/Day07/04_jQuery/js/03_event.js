
$(function() {
    // 이벤트 처리 메소드
    // -on('이벤트 타입', 이벤트핸들러(콜백함수){} )
    // * 이벤트 타입    : click, keyup, change ...
    // * 이벤트 핸들러  : 이벤트 발생 시, 실행될 함수

    $('#item1')
        .on('click', function() {
        $('#item1').css('color','hotpink')
    })

    $('#item2')
        .on('click', function() {
        this.css('color','hotpink')
    })

    $('#item2')
        .on('mouseover', function() {
        $(this).css('color','hotpink')
        $(this).css('background-color','cornflowerblue')
    })

    $('#item3')
        .on('mouseout', function() {
        $(this).css('color','white')
        $(this).css('background-color','royalblue')
         })

    $('#item4')
           .on('mouseout', function() {
           $(this).css('color','red')
           $(this).css('background-color','royalblue')
         })
           .on('mouseout', function() {
           $(this).css('color','white')
           $(this).css('background-color','royalblue')
        })
    
})