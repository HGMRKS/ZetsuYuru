let oyaTikeTitle=document.getElementsByClassName("subject")[0].innerText;
let oyaTike=document.title.split(" ",2)[1].split(":",2)[0];
console.log("\n"+oyaTikeTitle+"\nに　スバル15分以内復旧を子チケ化します\n\n間違っている場合はリロードしてやり直してください");

//停止させたい時間を配列に格納。

let stopTime=["09:00","12:00","16:00"];
let nowHours;
let nowMinutes;
let nowTime;

//累計表示用の変数を宣言

let ruikei=0;

//window名をあらかじめ定義

let sssKill;
let url1;
let url2;

let subaruKill=function(){

	//時間を取得して、変数：nowTime　に現在時刻を保存する。
	nowHours = new Date().getHours().toString().padStart(2, '0');
	nowMinutes = new Date().getMinutes().toString().padStart(2, '0');
	nowTime=nowHours+":"+nowMinutes;
	
	if(stopTime.includes(nowTime)){

		alert("まとめーるのお時間なので動作を停止しました。\n\n親チケットの番号："+oyaTike+"\n\n題名："+oyaTikeTitle+"\n\n起動後、発生/復旧ペアの子チケ化は　"+ruikei+"件　でした。");

		if(sssKill.closed==false){
			sssKill.close();
		}else{
		};

		if(url1.closed==false){
			url1.close();
		}else{
		};

		if(url2.closed==false){
			url2.close();
		}else{
		};

		document.location.reload();

	}else{

		sssKill = window.open("https://togo.tmz.itmac.jp/redmine/projects/ope_network/issues?utf8=%E2%9C%93&set_filter=1&sort=id%3Adesc&f%5B%5D=status_id&op%5Bstatus_id%5D=%3D&v%5Bstatus_id%5D%5B%5D=7&f%5B%5D=description&op%5Bdescription%5D=%21%7E&v%5Bdescription%5D%5B%5D=%E9%96%A2%E4%BF%82%E4%BC%9A%E7%A4%BE&f%5B%5D=cf_6&op%5Bcf_6%5D=%7E&v%5Bcf_6%5D%5B%5D=SSS&f%5B%5D=cf_4&op%5Bcf_4%5D=%21%7E&v%5Bcf_4%5D%5B%5D=tokyo.hanedaseibicenter.ap101&f%5B%5D=&c%5B%5D=cf_2&c%5B%5D=cf_3&c%5B%5D=cf_4&c%5B%5D=cf_5&c%5B%5D=cf_1&c%5B%5D=subject&c%5B%5D=status&c%5B%5D=priority&c%5B%5D=project&group_by=&t%5B%5D=", "pageSSS");
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
							}
						}
						if(num.length>=3){
							num=num.filter(Number.isFinite);
						};
						//ミリ秒に変換する
						jikan=Date.parse(timeDate[num[0]]);
						jikan2=Date.parse(timeDate[num[1]]);
				
						//分に変換して計算する(差分時間がわかる)
						console.log("差分時間："+(jikan-jikan2)/60000);
						let kekka=((jikan-jikan2)/60000);
						if(kekka<=15){
							url1=window.open("https://togo.tmz.itmac.jp/redmine/issues/"+sssKill.document.getElementsByClassName("id")[num[0]].innerText);
							url1.addEventListener('DOMContentLoaded', function(){
								url1.document.getElementById("issue_subject").value=url1.document.getElementById("issue_subject").value.split(' :',1)[0];
								url1.document.getElementById("issue_parent_issue_id").value=oyaTike;
								url1.document.getElementById("issue_status_id").value="12";
								url1.document.getElementsByName("commit")[1].click();
							});
							url2=window.open("https://togo.tmz.itmac.jp/redmine/issues/"+sssKill.document.getElementsByClassName("id")[num[1]].innerText);
							url2.addEventListener('DOMContentLoaded', function(){
								url2.document.getElementById("issue_subject").value=url2.document.getElementById("issue_subject").value.split(' :',1)[0];
								url2.document.getElementById("issue_parent_issue_id").value=oyaTike;
								url2.document.getElementById("issue_status_id").value="12";
								url2.document.getElementsByName("commit")[1].click();
							});
							console.log(hostName+"　を　"+oyaTikeTitle+"　に入れました");
							ruikei+=1;
							console.log("起動後、発生/復旧ペアの子チケ化は　"+ruikei+"件　です。");
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
					console.log('←　×　3分の間、アラーム検知は１件です。');
					sssKill.close();
				}
				sssKill.close();
			}else{
			//アラームが存在しない場合の処理
				console.log('スバルアラーム検知なし');
				sssKill.close();
			}
		});
	};
};

setTimeout(subaruKill,3000);
setInterval(subaruKill,20000);