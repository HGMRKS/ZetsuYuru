
let Gchild;

let GchildClose=function(){
	Gchild.close();
};

let w = window.open("https://togo.tmz.itmac.jp/redmine/", "gomi");

w.addEventListener('load', function(){
	w.close();
});

//累計記録用の関数を定義する。

let ruikei=0;


//urlを開く関数を作成

let urlOpen = function(){

//子窓が存在するか判定。存在していれば閉じる。

	if(w.closed==false){
		console.log("コリジョンが発生したぽ");
		w.close();
	}else{
	};

	w = window.open("https://togo.tmz.itmac.jp/redmine/projects/ope_network/issues?utf8=%E2%9C%93&set_filter=1&sort=id%3Adesc&f%5B%5D=status_id&op%5Bstatus_id%5D=o&f%5B%5D=priority_id&op%5Bpriority_id%5D=%3D&v%5Bpriority_id%5D%5B%5D=4&f%5B%5D=cf_2&op%5Bcf_2%5D=%21%7E&v%5Bcf_2%5D%5B%5D=%E5%B7%9D%E5%B4%8E&f%5B%5D=description&op%5Bdescription%5D=%21%7E&v%5Bdescription%5D%5B%5D=L-FFILM&f%5B%5D=cf_6&op%5Bcf_6%5D=%21%7E&v%5Bcf_6%5D%5B%5D=L-REM069&f%5B%5D=&c%5B%5D=cf_2&c%5B%5D=cf_3&c%5B%5D=cf_4&c%5B%5D=cf_5&c%5B%5D=cf_1&c%5B%5D=subject&c%5B%5D=status&c%5B%5D=priority&c%5B%5D=project&group_by=&t%5B%5D=", "gomi");

	w.addEventListener('load', function(){

		let almExistence=w.document.getElementsByClassName("nodata")[0]!=null;
		if (almExistence===false){

//アラームが存在する場合の処理

			let a=w.document.getElementsByClassName("items")[0].innerText.split('/',2)[0].split('-',2)[1];
			let b=[];
			let e=['https://togo.tmz.itmac.jp/redmine/issues/bulk_edit?ids%','5B%','5D='].join('');
			let f=['&ids%','5B%','5D='].join('');

			let GchildOpen=function(){
				w.close();
				Gchild=window.open(e,"kotike");
				Gchild.addEventListener('load', function(){
					Gchild.document.getElementById("issue_status_id").value=13;
					Gchild.document.getElementsByName("commit")[0].click();
					console.log(a+'件のアラームを完了にしました。');
					ruikei+=Number(a);
					console.log('起動してからの完了件数：　'+ruikei+'件　です。');
					setTimeout(GchildClose,7500);
				})
			};

			if(a==1){
//				console.log("アラーム検知は1件です");
				b[0]=w.document.getElementsByClassName("id")[0].innerText;
				e=e+b[0];
				GchildOpen();
			}else{
//				console.log("アラーム検知は複数です");
				for(let i=a-1;i>=0;i--){
					b[i]=w.document.getElementsByClassName("id")[i].innerText;
					if(i>=1){
						e=e+b[i]+f;
					}else{
						e=e+b[i];
						GchildOpen();
					};
				};
			};
		}else{
			w.close();
			console.log('ごみアラーム検知なし');
		};
	});
};

urlOpen();
setInterval(urlOpen,30000);