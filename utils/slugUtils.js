export const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Hapus karakter khusus
      .replace(/\s+/g, "-") // Ganti spasi dengan tanda hubung
      .trim();
  };
  