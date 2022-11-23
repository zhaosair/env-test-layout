// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';
import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';

if (process.env.NODE_ENV == 'development') {

  // setEndpoint('http://demo.smallsaas.cn:8001');
  // setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NTMwMTE3OTEsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzI3MDk5MX0._reFJnx631UymWNINrZTfwE3S9uBlsfIpR-ZiLskZNXf54bRdhe1y7ku8T3xk0REQ1aLosHZ5Ukh81fcb726kQ')
}

//indicator
import RightIconCheckboxSelect from '@/pages/checkboxList/indicator/RightIconCheckboxIndicator/Select';
import RightIconCheckboxSelected from '@/pages/checkboxList/indicator/RightIconCheckboxIndicator/Selected';
import RightIconCheckboxDefauct from '@/pages/checkboxList/indicator/RightIconCheckboxIndicator/Defauct';

//presenter
import UserAvatar from '@/pages/checkboxList/presenter/UserAvatar'
import UserName from '@/pages/checkboxList/presenter/UserName'


// NamedCartSet({
//   Cart
// })
// NamedLayoutSet({
//   Flexbox,
//   Wrap
// })
NamedIndicatorSet({
  RightIconCheckboxSelect,
  RightIconCheckboxSelected,
  RightIconCheckboxDefauct
})

NamedPresenterSet({
  UserAvatar,
  UserName
})
