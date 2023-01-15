import { Agenda, Job } from '@hokify/agenda'

export default class AgendaProvider {
  private agenda: Agenda

  constructor (mongoUrl: string) {
    this.agenda = new Agenda({
      db: {
        address: mongoUrl
      }
    })
  }

  public define (name: string, processor: (agendaJob: Job<any>, done: (error?: Error) => void) => void, options: Parameters<typeof this.agenda.schedule>[2]) {
    this.agenda.define(name, processor, options)
  }

  public async schedule (when: string, name: string, data: any) {
    await this.agenda.schedule(when, name, data)

    console.log(`[Job Scheduled] :: ${name} - ${JSON.stringify(data)}`)
  }

  public async start() {
    await this.agenda.start()
  }
}
