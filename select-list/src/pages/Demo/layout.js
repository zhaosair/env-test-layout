module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'column'
  },
  cart: {
    xname:"Cart",
    defaultIndicator: "RightIconRadioDefauct", //默认样式
    indicator: "RightIconRadioHoverIndicator",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
  	selector: 'RightIconRadioSelectedIndicator',  // select时用，第一次向子组件转递时，更名为 selectedIndicator
    props:{
      fill: 'transparent',
      linewidth: 0,
      isOnHover: false,
      margin: '0px',
      padding: '0px'
    }
  },
  // navigation: '/CheckboxPageDemo',
  container: 'SelectList',
  presenter: {
    xname: 'Flexbox',
    props: {
        align: 'start',
        direction: 'row',
        justify: 'center',
        spacing: 10
    },
    children: [
      {
        presenter: 'ItemImg',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              avatar: 'url'
            }
          }
        }
      },
      {
        presenter: 'ItemTitle',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              name: 'value'
            }
          }
        }
      },
    ]
  }
}