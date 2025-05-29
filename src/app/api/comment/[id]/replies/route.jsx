import db from '../../../../../../prisma/db'

export async function GET(_request, { params }) {
  const { id } = await params

  const replies = await db.comment.findMany({
    where: {
      parentId: parseInt(id),
    },
    include: {
      author: true,
    },
  })
  return Response.json(replies)
}
