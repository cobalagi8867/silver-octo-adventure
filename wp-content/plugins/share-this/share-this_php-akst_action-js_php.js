function akst_share(id, url, title) {
	var form = $('akst_form');
	var post_id = $('akst_post_id');
	
	if (form.style.display == 'block' && post_id.value == id) {
		form.style.display = 'none';
		return;
	}
	
	var link = $('akst_link_' + id);
	var offset = Position.cumulativeOffset(link);

	$("akst_delicious").href = akst_share_url("http://del.icio.us/post?url={url}&title={title}", url, title);
	$("akst_sapo").href = akst_share_url("http://tags.sapo.pt/post?v=3&url={url}&title={title}", url, title);
	$("akst_domelhor").href = akst_share_url("http://www.domelhor.net/submit.php?url={url}", url, title);
	$("akst_digacultura").href = akst_share_url("http://www.digacultura.net/submit.php?url={url}", url, title);
	$("akst_stumbleupon").href = akst_share_url("http://www.stumbleupon.com/submit?url={url}&title={title}", url, title);
	$("akst_marcantes").href = akst_share_url("http://os.marcant.es/bookmarks/?action=add&address={url}&title={title}", url, title);
	$("akst_google_bmarks").href = akst_share_url("  http://www.google.com/bookmarks/mark?op=edit&bkmk={url}&title={title}", url, title);
	$("akst_facebook").href = akst_share_url("http://www.facebook.com/share.php?u={url}&Title={title}", url, title);
	$("akst_windows_live").href = akst_share_url("https://favorites.live.com/quickadd.aspx?marklet=1&mkt=en-us&url={url}&title={title}&top=1", url, title);
	$("akst_reddit").href = akst_share_url("http://reddit.com/r/pt/submit?url={url}&title={title}", url, title);
	$("akst_eucurti").href = akst_share_url("http://www.eucurti.com.br/submit.php?url={url}", url, title);
	$("akst_rec6").href = akst_share_url("http://rec6.via6.com/link.php?url={url}&titulo={title}", url, title);

	post_id.value = id;

	form.style.left = offset[0] + 'px';
	form.style.top = (offset[1] + link.offsetHeight + 3) + 'px';
	form.style.display = 'block';
}

function akst_share_url(base, url, title) {
	base = base.replace('{url}', url);
	return base.replace('{title}', title);
}

function akst_share_tab(tab) {
	var tab1 = document.getElementById('akst_tab1');
	var tab2 = document.getElementById('akst_tab2');
	var body1 = document.getElementById('akst_social');
	var body2 = document.getElementById('akst_email');
	
	switch (tab) {
		case '1':
			tab2.className = '';
			tab1.className = 'selected';
			body2.style.display = 'none';
			body1.style.display = 'block';
			break;
		case '2':
			tab1.className = '';
			tab2.className = 'selected';
			body1.style.display = 'none';
			body2.style.display = 'block';
			break;
	}
}

function akst_xy(id) {
	var element = $(id);
	var x = 0;
	var y = 0;
}