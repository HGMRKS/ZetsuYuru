let oyaTike=document.title.split(" ",2)[1].split(":",2)[0];

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

	w = window.open("https://togo.tmz.itmac.jp/redmine/projects/ope_network/issues?utf8=%E2%9C%93&set_filter=1&sort=id%3Adesc&f%5B%5D=description&op%5Bdescription%5D=%7E&v%5Bdescription%5D%5B%5D=L-NOUCHU&f%5B%5D=cf_5&op%5Bcf_5%5D=%3D&v%5Bcf_5%5D%5B%5D=186.226.8.35&f%5B%5D=status_id&op%5Bstatus_id%5D=%3D&v%5Bstatus_id%5D%5B%5D=7&f%5B%5D=&c%5B%5D=cf_2&c%5B%5D=cf_3&c%5B%5D=cf_4&c%5B%5D=cf_5&c%5B%5D=cf_1&c%5B%5D=subject&c%5B%5D=status&c%5B%5D=priority&c%5B%5D=project&group_by=&t%5B%5D=","gomi");

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
					Gchild.document.getElementById("issue_subject").value=Gchild.document.getElementById("issue_subject").value.split(' :',1);
					Gchild.document.getElementById("issue_parent_issue_id").value=oyaTike;
					Gchild.document.getElementById("issue_status_id").value="12";
					Gchild.document.getElementsByName("commit")[0].click();
					console.log(a+'件のアラームを子チケ化しました。');
					ruikei+=Number(a);
					console.log('起動してからの子チケ化件数：　'+ruikei+'件　です。');
					setTimeout(GchildClose,10000);
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
			console.log('子チケアラーム検知なし');
		};
	});
};

urlOpen();
setInterval(urlOpen,45000);