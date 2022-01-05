2022/01/03 夜勤：【スバル】絶許(ZetsuYuru)

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

const sssKill = window.open("https://togo.tmz.itmac.jp/redmine/projects/ope_network/issues?set_filter=1&status_id=7&description=~L-SSS", "pageSSS");
sssKill.addEventListener('DOMContentLoaded', function(){

	let almExistence=sssKill.document.getElementsByClassName("nodata")[0]!=null;
	if (almExistence===false){

//アラームが存在する場合の処理

		let almNum=sssKill.document.getElementsByClassName("items")[0].innerText.split('/',2)[0].split('-',2)[1];
		let testDataA=[];
		let testDataB=[];
		let deleteDuplicate=0;
		let timeDate=[];
		let num=[];
		let hostName;

//アラームの件数が2件以上であれば、総当たりで重複探しを開始
//重複があれば、変数：deleteDuplicate　に重複IPアドレスを入れる

		if(almNum>=2){
			for(let i=0;almNum-1>=i;i++){
				testDataA[i]=sssKill.document.getElementsByClassName("cf_5 string")[i].innerText;
				testDataB[i]=sssKill.document.getElementsByClassName("cf_5 string")[i].innerText;
			}
			for(let duplicateA of testDataA){
				testDataB.shift();
				for(let duplicateB of testDataB){
					if(duplicateA===duplicateB){
						deleteDuplicate=duplicateA;
					}
				}
			}
			console.log("重複IPアドレス："+deleteDuplicate);

//重複IPアドレスが存在するなら時間や配列番号を取得する

			if(deleteDuplicate!==0){
				for(let i=0;almNum-1>=i;i++){
					if(testDataA[i]===deleteDuplicate){
						timeDate[i]=sssKill.document.getElementsByClassName("cf_1 string")[i].innerText;
						hostName=sssKill.document.getElementsByClassName("cf_4 string")[i].innerText;
						num[i]=i;
						console.log("取得したアラーム検知時間："+timeDate[i]);
//						console.log("発生/復旧の配列番号："+num[i]);
					}
				}
//				console.log("対象ホスト："+hostName)
//				console.log(num);
				if(num.length>=3){
					num=num.filter(Number.isFinite);
				};
//				console.log(num);
//				console.log("配列結果");
//ミリ秒に変換する
				jikan=Date.parse(timeDate[num[0]]);
				jikan2=Date.parse(timeDate[num[1]]);
//				console.log(jikan);
//				console.log(jikan2);
		
//分に変換して計算する(差分時間がわかる)
				console.log("差分時間："+(jikan-jikan2)/60000);
				let kekka=((jikan-jikan2)/60000);
				if(kekka<=15){
					console.log(hostName+"　を　"+oyaTikeTitle+"　に入れました");
					url1=window.open("https://togo.tmz.itmac.jp/redmine/issues/"+sssKill.document.getElementsByClassName("id")[num[0]].innerText);
					url1.addEventListener('DOMContentLoaded', function(){
						url1.document.getElementById("issue_subject").value=url1.document.getElementById("issue_subject").value.split(' :',1)[0];
						url1.document.getElementById("issue_parent_issue_id").value=ticket;
						url1.document.getElementById("issue_status_id").value="12";
						url1.document.getElementsByName("commit")[1].click();
					});
					url2=window.open("https://togo.tmz.itmac.jp/redmine/issues/"+sssKill.document.getElementsByClassName("id")[num[1]].innerText);
					url2.addEventListener('DOMContentLoaded', function(){
						url2.document.getElementById("issue_subject").value=url2.document.getElementById("issue_subject").value.split(' :',1)[0];
						url2.document.getElementById("issue_parent_issue_id").value=ticket;
						url2.document.getElementById("issue_status_id").value="12";
						url2.document.getElementsByName("commit")[1].click();
					});
					sssKill.close();
					setTimeout(function(){
						url1.close();
						url2.close();
					},5000);
				}else{
					console.log('15分以上経過しています');
					sssKill.close();
				}
			}
		}else{
			console.log('←　×　10秒の間、アラーム検知は１件です。');
			sssKill.close();
		}
		sssKill.close();
	}else{
//アラームが存在しない場合の処理
		console.log('←　×　10秒の間、アラーム検知なし');
		sssKill.close();
    }
});

};

setTimeout(subaruKill,3000);
setInterval(subaruKill,10000);