//現状、復旧/発生でも時間が15分以内なら反応してしまう。
//正規表現なりなんなりで判定修正予定。
//それぞれの時間になったら自動停止するようにしたい。


let ticket=prompt("親チケット番号を入力してください", "");

//親チケの題名を取得して、変数：oyaTikeTitle　に入れる
let oyaTikeTitle;
let oyaTike;

let oyaTikeFnc=function(){
	oyaTike.addEventListener('DOMContentLoaded', function(){
	oyaTikeTitle=oyaTike.document.getElementsByClassName("subject")[0].innerText;
	oyaTike.close();
	});
}

if(ticket.match(/#/)){
	oyaTike=window.open("https://togo.tmz.itmac.jp/redmine/issues/"+ticket.split("#",2)[1], "oyaTike");
	oyaTikeFnc();
}else{
	oyaTike=window.open("https://togo.tmz.itmac.jp/redmine/issues/"+ticket, "oyaTike");
	oyaTikeFnc();
}

let subaruKill=function(){

const sssKill = window.open("https://togo.tmz.itmac.jp/redmine/projects/ope_network/issues?utf8=%E2%9C%93&set_filter=1&sort=id%3Adesc&f%5B%5D=status_id&op%5Bstatus_id%5D=%3D&v%5Bstatus_id%5D%5B%5D=7&f%5B%5D=description&op%5Bdescription%5D=%21%7E&v%5Bdescription%5D%5B%5D=%E9%96%A2%E4%BF%82%E4%BC%9A%E7%A4%BE&f%5B%5D=cf_6&op%5Bcf_6%5D=%7E&v%5Bcf_6%5D%5B%5D=SSS&f%5B%5D=&c%5B%5D=cf_2&c%5B%5D=cf_3&c%5B%5D=cf_4&c%5B%5D=cf_5&c%5B%5D=cf_1&c%5B%5D=subject&c%5B%5D=status&c%5B%5D=priority&c%5B%5D=project&group_by=&t%5B%5D=", "pageSSS");

};



setTimeout(subaruKill,3000);
