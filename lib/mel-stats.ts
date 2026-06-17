export async function getMelStats(): Promise<{ userCount: number; phrasesCount: number }> {
  const fallback = { userCount: 113, phrasesCount: 378 };

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    return fallback;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/rpc/get_mel_stats`,
      {
        method: "POST",
        headers: {
          apikey: process.env.SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: "{}",
        signal: controller.signal,
      }
    );
    clearTimeout(timeout);
    if (!res.ok) return fallback;
    const data = await res.json();
    return {
      userCount: typeof data.user_count === "number" ? data.user_count : fallback.userCount,
      phrasesCount:
        typeof data.saved_phrases_count === "number"
          ? data.saved_phrases_count
          : fallback.phrasesCount,
    };
  } catch {
    clearTimeout(timeout);
    return fallback;
  }
}
