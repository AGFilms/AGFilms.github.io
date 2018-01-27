/**
 * Created by san on 12.05.17.
 */
$(document).ready(function () {


    $("#tab1").click(function () {
        //  Делаем активную иконку четкой
        var curTab = $(".cur_tab_control");
        curTab.removeClass("cur_tab_control");  //  Попробовал работу с переменной
        $(this).children().addClass("cur_tab_control");

        //  Показываем картинку соответственно нажатой кнопке
        $("img.pics").fadeOut(300, function () {
            $(this).attr("src", "img/section_4/Mykola.jpg").fadeIn(300);
        });

        $("#story1")
            .addClass('cur_story')
            .siblings()
            .removeClass('cur_story');

        return false;   //  Предотвращаем всплытие события
    });
    $("#tab2").click(function () {
        $(".cur_tab_control").removeClass("cur_tab_control");   //Можно и так
        $(this).children().addClass("cur_tab_control");

        $("img.pics").fadeOut(300, function () {
            $(this).attr("src", "img/section_4/Ira.jpg").fadeIn(300);    // document.getElementsByClassName("pics")[0].src = "2blue.jpg";
        });

        $("#story2")
            .addClass('cur_story')
            .siblings()
            .removeClass('cur_story');

        return false;
    });
    $("#tab3").click(function () {
        var curTab = $(".cur_tab_control");
        curTab.removeClass("cur_tab_control");
        $(this).children().addClass("cur_tab_control");

        $("img.pics").fadeOut(300, function () {
            $(this).attr("src", "img/section_4/Yaroslava.jpg").fadeIn(300);
        });

        $("#story3")
            .addClass('cur_story')
            .siblings()
            .removeClass('cur_story');

        return false;
    });
    $("#tab4").click(function () {
        var curTab = $(".cur_tab_control");
        curTab.removeClass("cur_tab_control");
        $(this).children().addClass("cur_tab_control");

        $("img.pics").fadeOut(300, function () {
            $(this).attr("src", "img/section_4/Maria.jpg").fadeIn(300);
        });

        $("#story4")
            .addClass('cur_story')
            .siblings()
            .removeClass('cur_story');

        return false;
    });
    $("#tab5").click(function () {
        var curTab = $(".cur_tab_control");
        curTab.removeClass("cur_tab_control");
        $(this).children().addClass("cur_tab_control");

        $("img.pics").fadeOut(300, function () {
            $(this).attr("src", "img/section_4/Natalia.jpg").fadeIn(300);
        });

        $("#story5")
            .addClass('cur_story')
            .siblings()
            .removeClass('cur_story');

        return false;
    });


});