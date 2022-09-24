Palmate Web sohbet ekranı entegrasyonu için sayfaya eklenmesi beklenen JavaScript dosyası aşağıdaki URL’de yer almaktadır. 

```
https://public.palmate.ai/iframe/popup.js
```

İlgili JavaScript dosyasını sayfaya implemente edecek olan HTML - JS kod parçacağı ise aşağıdaki gibidir. 

```jsx
<script>
      var _pproject = _pproject || [];
      _pproject.push([
          '_project_token',
          'PROJECT_TOKEN_BURADA_YER_ALMALI',
      ]);

      (function () {
          var pp = document.createElement('script');
          pp.type = 'text/javascript';
          pp.async = true;
          pp.src = 'https://public.palmate.ai/iframe/popup.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(pp, s);

      })();
 </script>
```

Kod parçacığı implemente edildikten sonra, ilgili sayfanın sağ altında bir sohbet balonu belirmesi gerekmektedir.
