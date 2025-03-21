export const dynamic = "force-static"; // Делаем API статическим
export const revalidate = 60; // Обновлять раз в 60 секунд

export async function GET(request) {
  const data = {
    name: "Bob",
    age: 15,
    bio: "Some info",
  };

  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  return new Response(request.body);
}
