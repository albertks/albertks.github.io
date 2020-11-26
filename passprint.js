    var changeHref;

    function response() {
        createURL();
        getParameter();
    }

    function getParameter() {
        document.getElementById("res").value = location.search.substring(1);
    }

    function createURL() {
        changeHref = 'starpassprnt://v1/print/nopreview?&size=2';
        changeHref = changeHref + "&back=" + encodeURIComponent(window.location.href);
        
        // url
        switch (document.getElementById("url").value) {
				case "none":
					break;
				case "html_receipt_sample":
				case "pdf_receipt_sample":
				case "free":
					changeHref = changeHref + "&url=" + encodeURIComponent(document.getElementById("url_free").value);
					break;
				default:
					break;
			}
        document.getElementById("send_data").value = changeHref;
    }

    function setUrl() {
			switch (document.getElementById("url").value) {
				case "none":
					document.getElementById("url_free").value = "";
					break;
				case "html_receipt_sample":
					document.getElementById("url_free").value = "https://www.star-m.jp/products/s_print/sdk/passprnt/sample/resource/receipt_sample.html";
					break;
				case "pdf_receipt_sample":
					document.getElementById("url_free").value = "https://www.star-m.jp/products/s_print/sdk/passprnt/sample/resource/receipt_sample.pdf";
					break;
				case "free":
				default:
					break;
			}
            createURL();
		}