//this js file creates iframe area

function deviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return 'mobile';
  }
  return 'desktop';
}

var palamar_token = _pproject[0][1] ? _pproject[0][1] : '';

const url_base = 'https://palmate.palamar.com.tr/callcenter/';

var _pp_iframe = document.createElement('iframe');
_pp_iframe.src = `${url_base}webchat?token=${palamar_token}`;

if (deviceType() == 'mobile') {
  _pp_iframe.style.position = 'fixed';
  _pp_iframe.style.height = '0';
  _pp_iframe.style.width = '100vw';
  _pp_iframe.style.top = '0';
  _pp_iframe.style.left = '0';
} else {
  _pp_iframe.style.position = 'fixed';
  _pp_iframe.style.right = '50px';
  _pp_iframe.style.bottom = '70px';
  _pp_iframe.style.height = '0%';
  _pp_iframe.style.opacity = 0;
  _pp_iframe.style.height = '90%';
  _pp_iframe.style.maxHeight = '650px';
  _pp_iframe.style.width = '450px';
  _pp_iframe.style.transition = 'all .7s ease-in-out';
}

_pp_iframe.style.border = 'none';

_pp_iframe.style.zIndex = '99999';
_pp_iframe.style.padding = '0';
_pp_iframe.style.background = 'none';
_pp_iframe.style.boxShadow = 'rgb(0 0 0 / 25%) 0px 4px 16px';
_pp_iframe.style.borderRadius = '8px';
_pp_iframe.id = '_palamar_chat_iframe';
_pp_iframe.style.transition = 'opacity 0.5s ease-in-out';
_pp_iframe.onload = minimizeClick;

var _pp_btn_iframe = document.createElement('iframe');
_pp_btn_iframe.src = `${url_base}popupbutton`;

_pp_btn_iframe.style.position = 'fixed';
_pp_btn_iframe.style.border = 'none';
_pp_btn_iframe.style.right = '0';
_pp_btn_iframe.style.bottom = '0';

_pp_btn_iframe.style.opacity = '100';
_pp_btn_iframe.style.height = '15%';
_pp_btn_iframe.style.maxHeight = '90px';
_pp_btn_iframe.style.width = '90px';
_pp_btn_iframe.style.zIndex = '9999';
_pp_btn_iframe.style.padding = '0';
_pp_btn_iframe.style.background = 'none';
_pp_btn_iframe.style.borderRadius = '8px';
_pp_btn_iframe.id = '_palamar_btn_iframe';
_pp_btn_iframe.style.transition = 'all 0.7s ease-in-out';
_pp_btn_iframe.onload = btnIframeclick;

function btnIframeclick() {
  document
    .getElementById('_palamar_btn_iframe')
    .contentWindow.postMessage('registerOnClickBtn', '*');
}

function minimizeClick() {
  document
    .getElementById('_palamar_chat_iframe')
    .contentWindow.postMessage('registerOnClickMinimize', '*');
}

window.addEventListener('message', (event) => {
  if (event.data == 'minimizeClicked') {
    document.getElementById('_palamar_chat_iframe').style.height = '0%';
    document.getElementById('_palamar_chat_iframe').style.opacity = 0;
    
    document.getElementById('_palamar_btn_iframe').style.opacity = 100;
  } else if (event.data == 'popupClicked') {
    document.getElementById('_palamar_chat_iframe').style.height =
      '100%';
    document.getElementById('_palamar_chat_iframe').style.opacity = 100;

    document.getElementById('_palamar_btn_iframe').style.opacity = 0;
  }
});

document.getElementsByTagName('body')[0].appendChild(_pp_iframe);
document.getElementsByTagName('body')[0].appendChild(_pp_btn_iframe);
