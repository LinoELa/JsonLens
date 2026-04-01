// Puerto para session remota (interfaz)
export class SessionRepository {
  async login(credentials){ throw new Error('not-implemented') }
  async logout(){ throw new Error('not-implemented') }
  async getCurrent(){ throw new Error('not-implemented') }
}
