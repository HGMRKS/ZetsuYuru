let oyaTikeTitle=document.getElementsByClassName("subject")[0].innerText;
let oyaTike=document.title.split(" ",2)[1].split(":",2)[0];
console.log("\n"+oyaTikeTitle+"\n�Ɂ@�X�o��15���ȓ��������q�`�P�����܂�\n\n�Ԉ���Ă���ꍇ�̓����[�h���Ă�蒼���Ă�������");

//��~�����������Ԃ�z��Ɋi�[�B

let stopTime=["09:00","12:00","16:00"];
let nowHours;
let nowMinutes;
let nowTime;

//�݌v�\���p�̕ϐ���錾

let ruikei=0;

//window�������炩���ߒ�`

let sssKill;
let url1;
let url2;

let subaruKill=function(){

	//���Ԃ��擾���āA�ϐ��FnowTime�@�Ɍ��ݎ�����ۑ�����B
	nowHours = new Date().getHours().toString().padStart(2, '0');
	nowMinutes = new Date().getMinutes().toString().padStart(2, '0');
	nowTime=nowHours+":"+nowMinutes;
	
	if(stopTime.includes(nowTime)){

		alert("�܂Ƃ߁[��̂����ԂȂ̂œ�����~���܂����B\n\n�e�`�P�b�g�̔ԍ��F"+oyaTike+"\n\n�薼�F"+oyaTikeTitle+"\n\n�N����A����/�����y�A�̎q�`�P���́@"+ruikei+"���@�ł����B");

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
		
			//�A���[�������݂���ꍇ�̏���
		
				let almNum=sssKill.document.getElementsByClassName("items")[0].innerText.split('/',2)[0].split('-',2)[1];
				let testDataA=[];
				let testDataB=[];
				let deleteDuplicate=0;
				let timeDate=[];
				let num=[];
				let hostName;
		
		//�A���[���̌�����2���ȏ�ł���΁A��������ŏd���T�����J�n
		//�d��������΁A�ϐ��FdeleteDuplicate�@�ɏd��IP�A�h���X������
		
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
					console.log("�d��IP�A�h���X�F"+deleteDuplicate);

					//�d��IP�A�h���X�����݂���Ȃ玞�Ԃ�z��ԍ����擾����

					if(deleteDuplicate!==0){
						for(let i=0;almNum-1>=i;i++){
							if(testDataA[i]===deleteDuplicate){
								timeDate[i]=sssKill.document.getElementsByClassName("cf_1 string")[i].innerText;
								hostName=sssKill.document.getElementsByClassName("cf_4 string")[i].innerText;
								num[i]=i;
								console.log("�擾�����A���[�����m���ԁF"+timeDate[i]);
							}
						}
						if(num.length>=3){
							num=num.filter(Number.isFinite);
						};
						//�~���b�ɕϊ�����
						jikan=Date.parse(timeDate[num[0]]);
						jikan2=Date.parse(timeDate[num[1]]);
				
						//���ɕϊ����Čv�Z����(�������Ԃ��킩��)
						console.log("�������ԁF"+(jikan-jikan2)/60000);
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
							console.log(hostName+"�@���@"+oyaTikeTitle+"�@�ɓ���܂���");
							ruikei+=1;
							console.log("�N����A����/�����y�A�̎q�`�P���́@"+ruikei+"���@�ł��B");
							sssKill.close();
							setTimeout(function(){
								url1.close();
								url2.close();
							},5000);
						}else{
							console.log('15���ȏ�o�߂��Ă��܂�');
							sssKill.close();
						}
					}
				}else{
					console.log('���@�~�@3���̊ԁA�A���[�����m�͂P���ł��B');
					sssKill.close();
				}
				sssKill.close();
			}else{
			//�A���[�������݂��Ȃ��ꍇ�̏���
				console.log('�X�o���A���[�����m�Ȃ�');
				sssKill.close();
			}
		});
	};
};

setTimeout(subaruKill,3000);
setInterval(subaruKill,20000);