# 날씨 예보 앱 `for React`

[결과물]: https://d1l5uqhv3ff5es.cloudfront.net/



## 1. Component 구성

![image](https://user-images.githubusercontent.com/21153016/67909250-e4f48200-fbc1-11e9-9c7d-0d98a61dfaab.png)

* 구글에서 "날씨" 검색하면 나오는 화면을 기준으로 비슷하게 만들어 볼 예정.



1. 전체 틀 [App.js]
   1. 상단에 현재 날씨를 보여줌 [Current.js]
   2. 하단에 시간별 예보를 그래프로 보여줌 [Forecast.js]
   3. 위치정보 동의 여부동안, 로딩중 표시 [Spinner.js]

![image](https://user-images.githubusercontent.com/21153016/67910163-f723ef80-fbc4-11e9-838a-9b39db924589.png)



## 2.아마존 aws

* S3 버킷 만들고
* IAM 사용자 만들고
  * 만들기 마지막 페이지에서 id key 저장 필수.
* PC에서 aws 사용 등록
  * aws configure --profile [로컬 사용자이름]
* CloudFront에 배포 
  *  aws s3 sync ./build/ s3://[버킷이름] --profile=[로컬 사용자이름]