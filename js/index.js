$(function() {

})

var t;
var index = 0;
/////�Զ�����
t = setInterval(play, 3000)

function play() {
  index++;
  if (index > 2) {
    index = 0
  }
  // console.log(index)
  $("#lunbobox ul li").eq(index).css({
    "background": "#999",
    "border": "1px solid #ffffff"
  }).siblings().css({
    "background": "#cccccc",
    "border": ""
  })

  $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
};

///������ ͼƬ�л�
$("#lunbobox ul li").click(function() {

  //��� �Ƴ���ʽ
  //$(this).addClass("lito").siblings().removeClass("lito"); //����ǰ����ƶ�����li������ʽ �������ֵ�Ԫ���Ƴ���ʽ   ��������ʽ�� ��hover ����li ʵ��
  $(this).css({
    "background": "#999",
    "border": "1px solid #ffffff"
  }).siblings().css({
    "background": "#cccccc"
  })
  var index = $(this).index(); //��ȡ���� ͼƬ�����밴ť��������һһ��Ӧ��
  // console.log(index);

  $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  �ҵ� �ֵܽڵ�(�������Լ���
});

