import dotenv from 'dotenv';
dotenv.config();

export async function GET() {
    const token = process.env.GITHUB_API_KEY?.trim();

    try {
      const response = await fetch('https://api.github.com/users/risiidhan/starred', {
        headers: {
          Authorization: `token ${token}`,
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("GitHub API Error:", errorData);
        return new Response(JSON.stringify({ error: errorData }), { status: response.status });
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error("Fetch Error:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }  