import { createConnection } from 'typeorm'

export const ConnectDB = async () => {
  const connect = await createConnection()

  console.log(`App connected to database ${connect.options.database}`)
}
