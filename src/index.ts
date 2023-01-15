import AgendaProvider from './agenda'
import { Env } from './env'

const agenda = new AgendaProvider(Env.getMongoUrl())

void agenda.define('pending-payment', async job => {
  const { name, ref, price, to } = job.attrs.data

  const emailService = {
    sendEmail: async (to: string, body: string) => {
      console.log(`Email sent to: ${to}\nBody: ${body}`)
    }
  }

  await emailService.sendEmail(to, `Hello ${name}. Your checkout ${ref} ($${price}) are pending.`)
}, 	{
  priority: 'high',
  concurrency: 5
});

(async () => {
  await agenda.start()

  // imagine the scenarius: you have a checkout and you need to notify your customer about pending payment.
  // then schedule service to notify in X time (i choose 5 seconds to test it fast)
  const ref = Math.round((Math.random() * 10))
  
  await agenda.schedule('in 5 seconds', 'pending-payment', {
    ref: `#${ref}`,
    price: 10.0,
    name: 'John Doe',
    to: 'johndoe@gmail.com'
  })
})()