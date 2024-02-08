export async function GET(request: NextRequest) {
  const token = request.cookies.get("authfofao.token");
  console.log("🚀 ~ GET ~ token:", token);

  return NextResponse.json({});
}
