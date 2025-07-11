// * Local storage simulation
const storage = new Map<string, string>()

// * 1. Real service
class ApiService {
  async getUserData(): Promise<string> {
    // * API simulation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('👤 User: Edied')
      }, 500)
    })
  }
}

// * 2. Proxy service
class ApiServiceProxy {
  constructor(private realService: ApiService) {}

  async getUserData(): Promise<string> {
    const token = storage.get('token')
    if (!token) throw new Error('Unauthorized')

    console.log('Valid token. Calling service...')
    const data = await this.realService.getUserData()
    console.log('Answer gotten from service')
    return data
  }
}

;(() => {
  // * 3. Simulation
  storage.set('token', 'abc123')

  const service = new ApiService()
  const proxy = new ApiServiceProxy(service)
  proxy.getUserData().then(console.log).catch(console.error)
})()
