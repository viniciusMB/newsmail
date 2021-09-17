import 'reflect-metadata'
import { ContentEntity } from '../entity/Content.entity'
import { getManager } from 'typeorm'

export class ContentService {
    public postContent = async (authorId, title, textContent, postId) => {
      const content = ContentEntity.create({ authorId, title, textContent, postId })

      const newContent = await getManager().save(content)
      return newContent
    }
}
