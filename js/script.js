/* cursor pointer */
$('img[alt="더보기아이콘"]').css('cursor','pointer');


//top 버튼
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 400 ) {
		$( '.top' ).fadeIn();
	} else {
		$( '.top' ).fadeOut();
	}
} );
$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 500 );
	return false;
} );
//wordbox 
$('html').on({click:function(e){
    let tgPoint=$(e.target);
    let boxHide=tgPoint.is('.wordboxBtn, .wordbox1, .wordbox2, .wordboxFooter, .firstWord, .endWord');

    if (boxHide){
        $('.wordboxWrap').show();
    }else{
        $('.wordboxWrap').hide();
    }
}
});
//keyboard
let keyboardCount=0;
$('.searchBtn1').click(function(){
    $('.keyboardWrap>.clearWrap>button').click(function(){
        $('.keyboardWrap').css('display','none');
        keyboardCount=0;
    });
    if(keyboardCount==0){
        $('.keyboardWrap').css('display','block');
        keyboardCount=1;
    }else {
        $('.keyboardWrap').css('display','none');
        keyboardCount=0;
    }
})

//인기검색어
$('.ctrlBtn1').click(function(){
    $('.popSearchs').css({left:0},500);
});
$('.ctrlBtn2').click(function(){
    $('.popSearchs').css({left:-100},500);
});

//banner
let current=0;
let navImg=$('.navImg>li>a');
let prevBtn=$('.navBtn>.prev');
let nextBtn=$('.navBtn>.next');


bannerSlide();
function bannerSlide(){
    setIntervalBanner=setInterval(function(){
        let prev=navImg.eq(current);
        move(prev, 0, '-100%');
        current++;
        if(current==navImg.size()) {current=0;}
        let next=navImg.eq(current);
        move(next, '100%', 0);
    },5000);
}
function move(tg, start, end){
    tg.css('left',start).stop().animate({left:end},500);
}

$('#nav').hover(function(){
    clearInterval(setIntervalBanner);
},function(){
    bannerSlide();
});

prevBtn.click(function(e){
    e.preventDefault();
    let prev=navImg.eq(current);
        move(prev, 0, '100%');
        current++;
        if(current==navImg.size()) {current=0;}
        let next=navImg.eq(current);
        move(next, '-100%', 0);
});

nextBtn.click(function(e){
    e.preventDefault();
    let prev=navImg.eq(current);
        move(prev, 0, '-100%');
        current++;
        if(current==navImg.size()) {current=0;}
        let next=navImg.eq(current);
        move(next, '100%', 0);
});

//보도자료 클릭

$('.releaseTitle1').click(function(e){
    e.preventDefault();
    $('.linkListFortextList>li>a').removeClass('on');
    $(this).addClass('on');
    $('.textBox>.mainText>span:eq(0)').html('<span>[부처합동] 신고제로 첫 발 내딛은 가상자산 시장, 이후의 관리방안 논의</span>');
    $('.textBox>.mainText>span:eq(1)').html('<span>신고제로 첫 발 내딛은 가상자산 시장, 이후의 관리방안 논의 구윤철 국무조정실장, 가상자산 관계부처회의주재 - 사업자</span>');
    $('.textBox>.mainText>span:eq(2)').html('<span>2022-01-28</span>');
    $('.textBox>p:eq(0)>a').html('[보도참고] 금융위원회 인사보도');
    $('.textBox>p:eq(0)>span').html('2022-01-28');
    $('.textBox>p:eq(1)>a').html('[보도자료] "자본시장특사경"기능을···');
    $('.textBox>p:eq(1)>span').html('2022-01-27');
    $('.textBox>p:eq(2)>a').html('[보도자료] 리보 산출중단 관련 대응 ···');
    $('.textBox>p:eq(2)>span').html('2022-01-27');
});
$('.releaseTitle2').click(function(e){
    e.preventDefault();
    $('.linkListFortextList>li>a').removeClass('on');
    $(this).addClass('on');
    $('.textBox>.mainText>span:eq(0)').html('<span>[보도설명] 사회초년생도 청년희망적금 가입기회를 가질 수 있는 방안을 논의중에···</span>');
    $('.textBox>.mainText>span:eq(1)').html('<span>1. 기사 내용 □ 조선일보는2.23일「청년희망적금이라더니... 사회 초년생은 가입 못한다」제하 기사에서, 2020년 소득 없이...</span>');
    $('.textBox>.mainText>span:eq(2)').html('<span>2022-02-23</span>');
    $('.textBox>p:eq(0)>a').html('[보도설명] 자본시장 불공정거래에 대···');
    $('.textBox>p:eq(0)>span').html('2022-02-16');
    $('.textBox>p:eq(1)>a').html('[보도설명] 디스커버리자산운용에 대···');
    $('.textBox>p:eq(1)>span').html('2022-02-14');
    $('.textBox>p:eq(2)>a').html('[보도설명] 햇살론카드는 상환 능력 범위···');
    $('.textBox>p:eq(2)>span').html('2022-02-14');
});
$('.releaseTitle3').click(function(e){
    e.preventDefault();
    $('.linkListFortextList>li>a').removeClass('on');
    $(this).addClass('on');
    $('.textBox>.mainText>span:eq(0)').html('<span>한국예탁결제원 감사 공개모집 공고(마감 : 2022.2.24(목) 18:00)</span>');
    $('.textBox>.mainText>span:eq(1)').html('<span>한국예탁결제원 감사 공개모집 공고」시장과 함께 성장하는 혁신금융플랫폼 한국예탁결제원에서 전문성과 역량을 갖춘 감사를...</span>');
    $('.textBox>.mainText>span:eq(2)').html('<span>2022-02-17</span>');
    $('.textBox>p:eq(0)>a').html('[금융위원회 공고 제2022-45호] 금융···');
    $('.textBox>p:eq(0)>span').html('2022-02-10');
    $('.textBox>p:eq(1)>a').html('한국주택금융공사 상임이사 모집 공···');
    $('.textBox>p:eq(1)>span').html('2022-01-28');
    $('.textBox>p:eq(2)>a').html('[금융위원회 공고 제2022-27호] 금융···');
    $('.textBox>p:eq(2)>span').html('2022-01-26');
});
$('.releaseTitle4').click(function(e){
    e.preventDefault();
    $('.linkListFortextList>li>a').removeClass('on');
    $(this).addClass('on');
    $('.textBox>.mainText>span:eq(0)').html('<span>상호금융업감독규정 일부개정고시(안) 규정변경예고</span>');
    $('.textBox>.mainText>span:eq(1)').html('<span>◉금융위원회 공고 제2022-38호 상호금융업감독규정」일부를 개정함에 있어 그 개정이유와 주요 내용을 국민에게 미리 알려...</span>');
    $('.textBox>.mainText>span:eq(2)').html('<span>2022-02-11</span>');
    $('.textBox>p:eq(0)>a').html('신용협동조합법 시행령 일부개정령(···');
    $('.textBox>p:eq(0)>span').html('2022-02-11');
    $('.textBox>p:eq(1)>a').html('보험업감독규정」 일부개정규정안···');
    $('.textBox>p:eq(1)>span').html('2022-02-09');
    $('.textBox>p:eq(2)>a').html('｢증권의 발행 및 공시 등에 관한 규정···');
    $('.textBox>p:eq(2)>span').html('2022-02-08');
});

//카드뉴스, 영상, 웹툰 클릭

$('.cardnewsBtn1').click(function(e){
    e.preventDefault();
    $('.linkListForcardNews>li>a').removeClass('on');
    $(this).addClass('on');
    $('.contentBox1>img').attr({src:'./image/cardnews/cardnews1.jpg'})
    $('.contentBox1>span').html('신규 상장기업 투자자에 대한 보호가···')
    $('.contentBox2>img').attr({src:'./image/cardnews/cardnews2.jpg'})
    $('.contentBox2>span').html('우크라이나 사태 대비 비상대응체계 유지')
    $('.contentBox3>img').attr({src:'./image/cardnews/cardnews3.jpg'})
    $('.contentBox3>span').html('소상공인 대출 만기연장 상환유예 연장···')
});
$('.cardnewsBtn2').click(function(e){
    e.preventDefault();
    $('.linkListForcardNews>li>a').removeClass('on');
    $(this).addClass('on');
    $('.contentBox1>img').attr({src:'./image/video/video1.png'})
    $('.contentBox1>span').html('보도자료 [혁신금융서비스 25건 지정]···')
    $('.contentBox2>img').attr({src:'./image/video/video2.png'})
    $('.contentBox2>span').html('청년층에 유리한 조건으로 바뀐 "통합···')
    $('.contentBox3>img').attr({src:'./image/video/video3.png'})
    $('.contentBox3>span').html('보도자료 [청년희망적금 가입가능 여부···')
});
$('.cardnewsBtn3').click(function(e){
    e.preventDefault();
    $('.linkListForcardNews>li>a').removeClass('on');
    $(this).addClass('on');
    $('.contentBox1>img').attr({src:'./image/webtoon/webtoon1.jpg'})
    $('.contentBox1>span').html('학자금대출에 금융권대출로 어려운 청년···')
    $('.contentBox2>img').attr({src:'./image/webtoon/webtoon2.jpg'})
    $('.contentBox2>span').html('갈수록 교묘해지는 보이스피싱! 사전에···')
    $('.contentBox3>img').attr({src:'./image/webtoon/webtoon3.jpg'})
    $('.contentBox3>span').html('금융대동여지도 서비스로 지점·ATM···')
});
//한눈에 보는 금융 정보

let informTimer;
let financialInform=$('.sliceListWrap');
let infromPrev=$('financialWrap>ul>li>.informPrev');
let informStop=$('financialWrap>ul>li>.informStop');
let informNext=$('financialWrap>ul>li>.informNext');


informSlide();
function informSlide(){
    informTimer=setInterval(function(){
        financialInform.animate({left:-321},500,function(){
            $(this).children('ul:first').insertAfter($(this).children('ul:last'))
            $(this).css({left:0});
        });
    },3000);
}


$('.informNext').click(function(){
    financialInform.animate({left:-321},500,function(){
        $(this).children('ul:first').insertAfter($(this).children('ul:last'));
        $(this).css({left:0});
    })
});

$('.informPrev').click(function(){
        financialInform.children('ul:last').insertBefore(financialInform.children('ul:first'))
        financialInform.css({left:-321}).stop().animate({left:0},500);
});

let clickStop=0;

$('.informStop').click(function(){
    if (clickStop==0){
        $(this).css({background:'url(./image/icon/ico_ban_play.png) no-repeat'});
        clearInterval(informTimer);
        clickStop=1;
    }else{
        $(this).css({background:'url(./image/icon/ico_ban_stop.png) no-repeat'});
        informSlide();
        clickStop=0;
    }
});



//알림판1
$(function(){
    let alram1Timer;
    let alram1Inform=$('.alram1Img');
    let alram1Prev=$('.alram1Prev');
    let alram1Stop=$('.alram1Stop');
    let alram1Next=$('.alram1Next');    
    let aramCheck=1;

    alram1Slide();
    function alram1Slide(){
        alram1Timer=setInterval(function(){
            alram1Inform.animate({left:-317},500,function(){
                $(this).children('a:first').insertAfter($(this).children('a:last'))
                $(this).css({left:0});
                aramCheck++;
                if(aramCheck==$('.alram1Img>a').size()+1){aramCheck=0};
                $('.alram1>.title>.count').text(aramCheck+" / 7");
            });
        },3000);
    }
    
    
    $('.alram1Next').click(function(){
        alram1Inform.animate({left:-317},500,function(){
            $(this).children('a:first').insertAfter($(this).children('a:last'));
            $(this).css({left:0});
            aramCheck++;
            if(aramCheck>=8){aramCheck=1};
            $('.alram1>.title>.count').text(aramCheck+" / 7");
        })
    });
    
    $('.alram1Prev').click(function(){
            alram1Inform.children('a:last').insertBefore(alram1Inform.children('a:first'))
            alram1Inform.css({left:-317}).stop().animate({left:0},500);
            aramCheck--;
            if(aramCheck<=0){aramCheck=7};
            $('.alram1>.title>.count').text(aramCheck+" / 7");
    });
    
    let alram1clickStop=true;
    
    $('.alram1Stop').click(function(){
    
        if (alram1clickStop==true){
            $(this).css({background:'url(./image/icon/ico_ban_play.png) no-repeat'});
            clearInterval(alram1Timer);
            alram1clickStop=false;
        }else{
            $(this).css({background:'url(./image/icon/ico_ban_stop.png) no-repeat'});
            alram1Slide();
            alram1clickStop=true;
        }
    });
});
