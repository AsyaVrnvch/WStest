let ws

const openHandler = () => {
  let a = JSON.stringify({ op: 'subscribe', channel: 'ticker', market: 'BTC-PERP' })
  ws.send(a)
}

const messageHandler = (callback: (OrderState) => void) => (event: MessageEvent) => {
  let dataWS = JSON.parse(event.data)
  if (dataWS.type === 'update') callback(dataWS.data)
}

export const connectWS = (callback: (OrderState) => void) => {
  ws = new WebSocket('wss://ftx.com/ws/')
  ws.addEventListener('open', openHandler)
  ws.addEventListener('message', messageHandler(callback))
}

export const closeWS = () => {
  ws.removeEventListener('open', openHandler)
  ws.removeEventListener('message', messageHandler)
  ws.close()
}
