const getHeaderComponentStyle = () => {
  return (`
  <style>
      .header {
        background-color: #EEEEEE;
        display: flex;
        gap: 16px;
        justify-content: center;
        align-items: center;
        width: 100vw;
        padding-bottom: 18px;
        padding-top: 18px;
      }
      .header img {
        width: 38px;
        height: 38px;
        border-radius: 50px;
      }
      .name {
        font-size: 24px;
      }
      .status {
        font-size: 12px;
        color: #707070;
      }
   
   </style>
  `)
}

export { getHeaderComponentStyle } 