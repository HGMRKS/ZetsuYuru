javascript:(function(){
	let ticketId;
	let openUrl;
	let openWindow=[];
	let almNum=document.getElementsByClassName("items")[0].innerText.split("/",2)[0].split("-",2)[1];
	for(let i=0;i<almNum;i++){
		ticketId=document.getElementsByClassName("id")[i].innerText;
		openUrl=`https://togo.tmz.itmac.jp/redmine/issues/${ticketId}`;
		openWindow[i]=window.open(openUrl,"processing"[i]);
		openWindow[i].addEventListener('DOMContentLoaded', function(){

			//加工処理(スバルの加工ならこれだけでいいでしょう)
			openWindow[i].document.getElementById("issue_subject").value="y8hodssh15n01(豊洲TX 15F北中間L2スイッチ#1/2/3/4/5/6)でCisco_syslogトラップ受信";

			//同時に子チケ化もする場合　"チケット番号"　部分を親チケの番号にする
//			openWindow[i].document.getElementById("issue_parent_issue_id").value="チケット番号";
//			openWindow[i].document.getElementById("issue_status_id").value="12";

			openWindow[i].document.getElementsByName("commit")[0].click();

//加工後3秒後に閉じる
			setTimeout(function(){
				openWindow[i].close();
			},3000)
		});
	};
})();