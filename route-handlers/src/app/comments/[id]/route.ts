import { comments } from "../data";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const comment = comments.find((comment: any) => comment.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();
  const comment = comments.find((comment: any) => comment.id === parseInt(id));
  if (!comment) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }
  comment.text = body.text;
  return Response.json(comment);
}
