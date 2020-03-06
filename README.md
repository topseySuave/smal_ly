### Smally URL Shortner
-------------------------------------------

Preview domain before getting the actual domain https://smlly.herokuapp.com/


###### To Contribute
clone the repository
```
git clone git@github.com:topseySuave/smal_ly.git
```

or with http
```
git clone https://github.com/topseySuave/smal_ly.git
```

cd into smal_ly folder `cd smal_ly`

and `yarn` or `npm install`

setup mongo database start it and run
```
yarn dev
```

or 

```
npm run dev
```

because this is only a API backend we can test it by using postman or adding `REST CLIENT` to your vscode extention
then create a folder and file

`requests/api.http`

then add to the file 

```
POST https://smlly.herokuapp.com/api/url/shorten
Content-Type: application/json

{
    "longUrl": "https://www.amazon.com/PlayStation-Slim-1TB-Console-Bundle-4/dp/B07YLDNTKB/ref=pd_sbs_63_2/139-1402146-5016202?_encoding=UTF8&pd_rd_i=B07YLDNTKB&pd_rd_r=02093a5a-24b0-45c1-868c-6f4b7dc00761&pd_rd_w=iLvj5&pd_rd_wg=AeSL4&pf_rd_p=7cd8f929-4345-4bf2-a554-7d7588b3dd5f&pf_rd_r=EJ0ZSE8ANZSJF7WY8G6A&psc=1&refRID=EJ0ZSE8ANZSJF7WY8G6A"
}
```

by click the send Request link at the top of the file makes the request and displays a response on the horizontal section of your screen

with the response

```
HTTP/1.1 200 OK
Server: Cowboy
Connection: close
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 535
Etag: W/"217-X5HLb7v4RkUrfpdW8AkzaJ8NN/U"
Date: Fri, 06 Mar 2020 08:59:42 GMT
Via: 1.1 vegur

{
  "clicks": 1,
  "_id": "5e61fe702889480017deb201",
  "longUrl": "https://www.amazon.com/PlayStation-Slim-1TB-Console-Bundle-4/dp/B07YLDNTKB/ref=pd_sbs_63_2/139-1402146-5016202?_encoding=UTF8&pd_rd_i=B07YLDNTKB&pd_rd_r=02093a5a-24b0-45c1-868c-6f4b7dc00761&pd_rd_w=iLvj5&pd_rd_wg=AeSL4&pf_rd_p=7cd8f929-4345-4bf2-a554-7d7588b3dd5f&pf_rd_r=EJ0ZSE8ANZSJF7WY8G6A&psc=1&refRID=EJ0ZSE8ANZSJF7WY8G6A",
  "shortUrl": "https://smlly.herokuapp.com/gZKzP_sg",
  "urlCode": "gZKzP_sg",
  "date": "Fri Mar 06 2020 07:40:32 GMT+0000 (Coordinated Universal Time)",
  "__v": 0
}
```

navigating to shortUrl redirects you to your original link you wished to shorten.

