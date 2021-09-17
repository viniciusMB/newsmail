import 'reflect-metadata'
import { AuthorEntity } from '../entity/Author.entity'
import { getManager } from 'typeorm'

export class AuthorService {
    public register = async (name: string, email: string, password: string) => {
      const author = AuthorEntity.create({ name, email, password })

      const newAuthor = await getManager().save(author)
      return newAuthor
    }

    public index = async (authorId: number) => {
      const authorFound = await getManager().findOne(AuthorEntity, authorId)
      return authorFound
    }

    public delete = async (authorId: number) => {
      const authorDeleted = await AuthorEntity.delete({ authorId: authorId })
      return authorDeleted
    }
}
