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

			//���H����(�X�o���̉��H�Ȃ炱�ꂾ���ł����ł��傤)
			openWindow[i].document.getElementById("issue_subject").value="y8hodssh15n01(�L�FTX 15F�k����L2�X�C�b�`#1/2/3/4/5/6)��Cisco_syslog�g���b�v��M";

			//�����Ɏq�`�P��������ꍇ�@"�`�P�b�g�ԍ�"�@������e�`�P�̔ԍ��ɂ���
//			openWindow[i].document.getElementById("issue_parent_issue_id").value="�`�P�b�g�ԍ�";
//			openWindow[i].document.getElementById("issue_status_id").value="12";

			openWindow[i].document.getElementsByName("commit")[0].click();

//���H��3�b��ɕ���
			setTimeout(function(){
				openWindow[i].close();
			},3000)
		});
	};
})();