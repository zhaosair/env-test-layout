// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';
import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';

if (process.env.NODE_ENV == 'development') {

  // setEndpoint('http://demo.smallsaas.cn:8001');
  // setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NTMwMTE3OTEsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzI3MDk5MX0._reFJnx631UymWNINrZTfwE3S9uBlsfIpR-ZiLskZNXf54bRdhe1y7ku8T3xk0REQ1aLosHZ5Ukh81fcb726kQ')
}

//presenter
import demoItem from '@/pages/demoList/demoItem';

//indicator
import RightIconCheckboxSelect from '@/pages/radioDemo/indicator/RightIconCheckboxIndicator/Select';
import RightIconCheckboxSelected from '@/pages/radioDemo/indicator/RightIconCheckboxIndicator/Selected';
import RightIconCheckboxDefauct from '@/pages/radioDemo/indicator/RightIconCheckboxIndicator/Defauct';

//presenter
import ItemImg from '@/pages/radioDemo/presenter/ItemImg'
import ItemTitle from '@/pages/radioDemo/presenter/ItemTitle'



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
  demoItem,
  ItemImg,
  ItemTitle
})

// FormItemTypeSet({
//   "input": InputCompx,
//   "select-fetch": SelectFetch
// })