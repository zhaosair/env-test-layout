module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'column'
  },
  cart: {
    xname:"Cart",
    defaultIndicator: "RightIconCheckboxDefauct", //默认样式
    indicator: "RightIconCheckboxSelect",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
  	selector: 'RightIconCheckboxSelected',  // select时用，第一次向子组件转递时，更名为 selectedIndicator
    props:{
      fill: 'transparent',
      linewidth: 0,
      isOnHover: false,
      margin: '0px',
      padding: '0px'
    }
  },
  container: 'SelectCheckboxList',
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
        presenter: 'UserAvatar',
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
        presenter: 'UserName',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              name: 'body'
            }
          }
        }
      },
    ]
  }
}