let ws

export const connectWS = (callback: (OrderState) => void) => {
  ws = new WebSocket('wss://ftx.com/ws/')
  ws.addEventListener('open', function (event) {
    let a = JSON.stringify({ op: 'subscribe', channel: 'ticker', market: 'BTC-PERP' })
    ws.send(a)
  })
  ws.addEventListener('message', function (event) {
    let dataWS = JSON.parse(event.data)
    if (dataWS.type === 'update') callback(dataWS.data)
  })
}

export const closeWS = () => {
  ws.close()
}
