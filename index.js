addEventListener("fetch", event => {
  let url = new URL(event.request.url)
  let u = event.request.url
  let img_types = u.substring(u.lastIndexOf('_') +1, u.lastIndexOf('.'))
  if(img_types == 'o') {
    url.hostname = "images2.imgbox.com"
  }else {
    url.hostname = "thumbs2.imgbox.com"
  }
  

  let request = new Request(url, event.request);
  event.respondWith(
    fetch(request, {
      headers: {
        'Referer': 'https://www.imgbox.com/',
        'User-Agent': 'Cloudflare Workers'
      }
    })
  )
})